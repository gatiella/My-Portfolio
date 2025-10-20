---
layout: project
title: "Custom Network Scanner"
description: "A fast, multi-threaded network scanner built with Python"
date: 2024-01-15
status: "Completed"
difficulty: "Medium"
tags: ["Python", "Network Security", "Scanning", "Tool Development"]
github: "https://github.com/yourusername/network-scanner"
demo: ""
download: ""
image: "/assets/images/projects/network-scanner.png"
technologies:
  - Python 3.x
  - Scapy
  - Threading
  - Socket Programming
  - JSON
features:
  - Multi-threaded scanning for improved speed
  - Support for TCP, UDP, and ICMP protocols
  - Service version detection
  - Custom port range scanning
  - JSON output format
  - Logging and error handling
---

## Overview

This custom network scanner is designed to perform fast and efficient network reconnaissance. Built with Python and leveraging the Scapy library, it supports multiple scanning techniques and provides detailed information about discovered hosts and services.

## Motivation

During penetration testing engagements, I found existing tools sometimes lacked specific features I needed or were too slow for large networks. This project was born from the need for a customizable, fast, and reliable scanning tool.

## Features in Detail

### Multi-threaded Architecture
The scanner uses Python's threading module to perform concurrent scans, significantly reducing scan time for large networks.
```python
def threaded_scan(target, ports):
    with ThreadPoolExecutor(max_workers=100) as executor:
        results = executor.map(lambda p: scan_port(target, p), ports)
    return list(results)
```

### Protocol Support
- **TCP Connect Scans**: Full three-way handshake
- **SYN Scans**: Stealthy half-open scanning
- **UDP Scans**: Connectionless protocol detection
- **ICMP Ping Sweeps**: Host discovery

### Service Detection
The tool attempts to identify services running on open ports by analyzing banner information and comparing against a signature database.
```python
def detect_service(port, banner):
    signatures = load_signatures()
    for sig in signatures:
        if sig['pattern'] in banner:
            return sig['service']
    return "Unknown"
```

## Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/network-scanner.git
cd network-scanner

# Install dependencies
pip install -r requirements.txt

# Run the scanner
python scanner.py --help
```

## Usage Examples

### Basic Host Scan
```bash
python scanner.py -t 192.168.1.1
```

### Scan Specific Ports
```bash
python scanner.py -t 192.168.1.0/24 -p 22,80,443,8080
```

### Full Network Sweep
```bash
python scanner.py -t 192.168.1.0/24 -p 1-65535 -o results.json
```

### Service Detection
```bash
python scanner.py -t 192.168.1.1 -sV
```

## Technical Architecture
```
┌─────────────────────────────────────┐
│      Command Line Interface         │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│       Argument Parser               │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│      Scan Orchestrator              │
│  ┌────────────────────────────┐    │
│  │  Thread Pool Manager       │    │
│  └────────────────────────────┘    │
└──────────────┬──────────────────────┘
               │
     ┌─────────┼─────────┐
     │         │         │
┌────▼───┐ ┌──▼────┐ ┌──▼────┐
│  TCP   │ │  UDP  │ │ ICMP  │
│ Scan   │ │ Scan  │ │ Scan  │
└────┬───┘ └───┬───┘ └───┬───┘
     │         │         │
     └─────────┼─────────┘
               │
┌──────────────▼──────────────────────┐
│      Results Aggregator             │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│      Output Formatter               │
│  (JSON / CSV / Terminal)            │
└─────────────────────────────────────┘
```

## Performance Benchmarks

| Network Size | Ports | Time (Standard) | Time (Multi-threaded) |
|--------------|-------|-----------------|----------------------|
| Single Host  | 1000  | 45s             | 8s                   |
| /24 Subnet   | 100   | 15m             | 2m                   |
| /16 Network  | 10    | 3h              | 25m                  |

## Challenges & Solutions

### Challenge 1: Rate Limiting
**Problem**: Many firewalls and IDS systems detect and block rapid scanning.

**Solution**: Implemented adaptive rate limiting that adjusts scan speed based on response times and packet loss.
```python
class AdaptiveRateLimiter:
    def __init__(self, initial_rate=100):
        self.rate = initial_rate
        self.packet_loss = 0
    
    def adjust_rate(self):
        if self.packet_loss > 0.1:  # 10% loss
            self.rate *= 0.8  # Slow down
        elif self.packet_loss < 0.01:
            self.rate *= 1.2  # Speed up
```

### Challenge 2: Privilege Requirements
**Problem**: Raw socket operations require root/admin privileges.

**Solution**: Added fallback to non-privileged scanning methods when elevated privileges are unavailable.

### Challenge 3: Large Network Memory Usage
**Problem**: Scanning large networks consumed excessive memory.

**Solution**: Implemented generator-based iteration and result streaming to disk.

## Security Considerations

⚠️ **Legal Notice**: This tool should only be used on networks you own or have explicit permission to test. Unauthorized network scanning is illegal.

- Always obtain written authorization before scanning
- Respect rate limits and network policies
- Be aware of logging and detection systems
- Use responsibly and ethically

## Future Enhancements

- [ ] Add OS fingerprinting capabilities
- [ ] Implement NSE script support
- [ ] Create GUI interface
- [ ] Add vulnerability database integration
- [ ] Support for IPv6 scanning
- [ ] Cloud deployment options

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](https://github.com/yourusername/network-scanner/blob/main/CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/yourusername/network-scanner/blob/main/LICENSE) file for details.

## Acknowledgments

- Scapy library developers
- The Nmap project for inspiration
- Security community for feedback and testing

---

## Related Projects

- [Port Scanner Pro](/projects/port-scanner-pro)
- [Vulnerability Assessment Tool](/projects/vuln-scanner)
- [Network Enumeration Suite](/projects/enum-suite)