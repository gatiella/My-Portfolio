// Terminal effects and matrix rain

// Matrix Rain Effect
const canvas = document.getElementById('matrix-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?/~`';
  const charArray = chars.split('');

  const fontSize = 14;
  const columns = canvas.width / fontSize;

  const drops = [];
  for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * -100;
  }

  function drawMatrix() {
    ctx.fillStyle = 'rgba(10, 14, 39, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff41';
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const text = charArray[Math.floor(Math.random() * charArray.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  // Only run matrix effect on home page or if enabled
  if (document.body.classList.contains('home') || localStorage.getItem('matrixMode') === 'true') {
    setInterval(drawMatrix, 50);
  }

  // Resize handler
  window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// Terminal cursor blink
const cursors = document.querySelectorAll('.cursor, .terminal-cursor');
cursors.forEach(cursor => {
  setInterval(() => {
    cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
  }, 500);
});

// Terminal typing animation
class TerminalTyper {
  constructor(element, text, speed = 50) {
    this.element = element;
    this.text = text;
    this.speed = speed;
    this.index = 0;
  }

  type() {
    if (this.index < this.text.length) {
      this.element.textContent += this.text.charAt(this.index);
      this.index++;
      setTimeout(() => this.type(), this.speed);
    }
  }

  start() {
    this.element.textContent = '';
    this.type();
  }
}

// Initialize terminal typers
document.querySelectorAll('[data-terminal-text]').forEach(el => {
  const text = el.getAttribute('data-terminal-text');
  const speed = parseInt(el.getAttribute('data-speed')) || 50;
  const typer = new TerminalTyper(el, text, speed);
  
  // Start typing when element is in viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        typer.start();
        observer.unobserve(entry.target);
      }
    });
  });
  
  observer.observe(el);
});

// Glitch effect
function applyGlitchEffect(element) {
  const text = element.textContent;
  const chars = '!<>-_\\/[]{}—=+*^?#________';
  
  let iterations = 0;
  const maxIterations = text.length;
  
  const interval = setInterval(() => {
    element.textContent = text
      .split('')
      .map((char, index) => {
        if (index < iterations) {
          return text[index];
        }
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join('');
    
    iterations += 1 / 3;
    
    if (iterations >= maxIterations) {
      clearInterval(interval);
      element.textContent = text;
    }
  }, 30);
}

// Apply glitch to elements with glitch class on hover
document.querySelectorAll('.glitch').forEach(el => {
  el.addEventListener('mouseenter', function() {
    applyGlitchEffect(this);
  });
});

// Command prompt simulator
class CommandPrompt {
  constructor(container) {
    this.container = container;
    this.commands = [];
    this.currentIndex = 0;
  }

  addCommand(command, output, delay = 0) {
    this.commands.push({ command, output, delay });
  }

  async execute() {
    for (const cmd of this.commands) {
      await this.wait(cmd.delay);
      await this.typeCommand(cmd.command);
      await this.showOutput(cmd.output);
    }
  }

  async typeCommand(command) {
    const line = document.createElement('div');
    line.className = 'terminal-line';
    
    const prompt = document.createElement('span');
    prompt.className = 'prompt';
    prompt.textContent = '$ ';
    
    const commandText = document.createElement('span');
    commandText.className = 'command';
    
    line.appendChild(prompt);
    line.appendChild(commandText);
    this.container.appendChild(line);

    for (let i = 0; i < command.length; i++) {
      commandText.textContent += command[i];
      await this.wait(50);
    }

    await this.wait(300);
  }

  async showOutput(output) {
    const outputDiv = document.createElement('div');
    outputDiv.className = 'terminal-output';
    outputDiv.textContent = output;
    this.container.appendChild(outputDiv);
    await this.wait(500);
  }

  wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Initialize command prompts
document.querySelectorAll('.terminal-simulator').forEach(terminal => {
  const prompt = new CommandPrompt(terminal);
  
  const commands = JSON.parse(terminal.getAttribute('data-commands') || '[]');
  commands.forEach(cmd => {
    prompt.addCommand(cmd.command, cmd.output, cmd.delay || 0);
  });
  
  // Start when visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        prompt.execute();
        observer.unobserve(entry.target);
      }
    });
  });
  
  observer.observe(terminal);
});

// Hacker text scramble effect
function scrambleText(element, finalText, duration = 1000) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  const startTime = Date.now();
  
  const interval = setInterval(() => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const scrambled = finalText
      .split('')
      .map((char, i) => {
        if (i < progress * finalText.length) {
          return finalText[i];
        }
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join('');
    
    element.textContent = scrambled;
    
    if (progress === 1) {
      clearInterval(interval);
      element.textContent = finalText;
    }
  }, 50);
}

// Apply to elements with data-scramble attribute
document.querySelectorAll('[data-scramble]').forEach(el => {
  const text = el.textContent;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        scrambleText(el, text, 2000);
        observer.unobserve(entry.target);
      }
    });
  });
  observer.observe(el);
});

// Binary rain effect (alternative to matrix)
function createBinaryRain(container) {
  const binary = ['0', '1'];
  
  setInterval(() => {
    const span = document.createElement('span');
    span.className = 'binary-drop';
    span.textContent = binary[Math.floor(Math.random() * 2)];
    span.style.left = Math.random() * 100 + '%';
    span.style.animationDuration = (Math.random() * 2 + 1) + 's';
    
    container.appendChild(span);
    
    setTimeout(() => span.remove(), 3000);
  }, 100);
}

// Initialize binary rain if container exists
const binaryContainer = document.querySelector('.binary-rain-container');
if (binaryContainer) {
  createBinaryRain(binaryContainer);
}

// Console security warning
setTimeout(() => {
  console.log(
    '%c⚠️ WARNING',
    'color: #ff0051; font-size: 24px; font-weight: bold; text-shadow: 0 0 5px #ff0051;'
  );
  console.log(
    '%cThis is a browser feature intended for developers. If someone told you to copy-paste something here, they might be trying to compromise your account.',
    'color: #00ff41; font-size: 14px;'
  );
}, 1000);