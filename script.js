// PART 2: JAVASCRIPT FUNCTIONS - SCOPE, PARAMETERS & RETURN VALUES

// Global variables to demonstrate scope
let globalCounter = 0
const globalMessage = "This is a global variable"

// Function with parameters and return values - Calculator functions
function addNumbers(a, b) {
  // Local variable demonstrating local scope
  const operation = "addition"
  console.log(`Performing ${operation} on ${a} and ${b}`)
  return a + b
}

function multiplyNumbers(a, b) {
  const operation = "multiplication"
  console.log(`Performing ${operation} on ${a} and ${b}`)
  return a * b
}

function powerCalculation(base, exponent) {
  const operation = "exponentiation"
  console.log(`Performing ${operation}: ${base} to the power of ${exponent}`)
  return Math.pow(base, exponent)
}

// Higher-order function that takes operation type and returns result
function performCalculation(operationType) {
  // Get input values
  const num1 = Number.parseFloat(document.getElementById("num1").value) || 0
  const num2 = Number.parseFloat(document.getElementById("num2").value) || 0

  let result
  let operationName

  // Use parameters to determine which function to call
  switch (operationType) {
    case "add":
      result = addNumbers(num1, num2)
      operationName = "Addition"
      break
    case "multiply":
      result = multiplyNumbers(num1, num2)
      operationName = "Multiplication"
      break
    case "power":
      result = powerCalculation(num1, num2)
      operationName = "Power"
      break
    default:
      result = "Invalid operation"
      operationName = "Error"
  }

  // Display result using return value
  displayResult(operationName, num1, num2, result)

  // Increment global counter to show global scope access
  globalCounter++
  console.log(`Total calculations performed: ${globalCounter}`)

  return result
}

// Function to display calculation results
function displayResult(operation, num1, num2, result) {
  const resultElement = document.getElementById("result")
  resultElement.innerHTML = `
        <strong>${operation}:</strong> ${num1} and ${num2} = <span style="color: #667eea; font-size: 1.2em;">${result}</span>
        <br><small>Calculation #${globalCounter + 1}</small>
    `

  // Add animation class temporarily
  resultElement.classList.add("bounce")
  setTimeout(() => {
    resultElement.classList.remove("bounce")
  }, 1000)
}

// Function to demonstrate scope differences
function demonstrateScope() {
  // Local variables
  const localCounter = 100
  const localMessage = "This is a local variable"

  // Inner function to show nested scope
  function innerFunction() {
    const innerVariable = "I'm inside the inner function"
    // Can access all outer scopes
    return `Inner: ${innerVariable}, Local: ${localMessage}, Global: ${globalMessage}`
  }

  // Display scope demonstration
  const output = document.getElementById("scope-output")
  output.innerHTML = `
        <h4>Scope Demonstration:</h4>
        <p><strong>Global Counter:</strong> ${globalCounter}</p>
        <p><strong>Local Counter:</strong> ${localCounter}</p>
        <p><strong>Global Message:</strong> ${globalMessage}</p>
        <p><strong>Local Message:</strong> ${localMessage}</p>
        <p><strong>Inner Function Result:</strong> ${innerFunction()}</p>
        <small>Note: Local variables are only accessible within their function scope!</small>
    `

  // Modify global variable to show global scope access
  globalCounter += 10
}

// PART 3: COMBINING CSS ANIMATIONS WITH JAVASCRIPT

// Function to flip card using CSS class manipulation
function flipCard(cardElement) {
  // Toggle CSS class to trigger animation
  cardElement.classList.toggle("flipped")

  // Log the action (demonstrating function execution)
  console.log("Card flip triggered via JavaScript!")
}

// Function to trigger box animation dynamically
function triggerBoxAnimation() {
  const box = document.getElementById("animatedBox")

  // Remove any existing animation classes
  box.classList.remove("bounce", "shake")

  // Add animation class based on random choice
  const animations = ["bounce", "shake"]
  const randomAnimation = animations[Math.floor(Math.random() * animations.length)]

  box.classList.add(randomAnimation)

  // Remove animation class after animation completes
  setTimeout(() => {
    box.classList.remove(randomAnimation)
  }, 1000)

  console.log(`Triggered ${randomAnimation} animation on box`)
}

// Modal control functions
function openModal() {
  const modal = document.getElementById("modal")
  modal.classList.remove("hidden")

  // Prevent body scrolling when modal is open
  document.body.style.overflow = "hidden"

  console.log("Modal opened with CSS animation triggered by JavaScript")
}

function closeModal() {
  const modal = document.getElementById("modal")
  modal.classList.add("hidden")

  // Restore body scrolling
  document.body.style.overflow = "auto"

  console.log("Modal closed")
}

// Loading animation control functions
let loadingInterval

function startLoadingAnimation() {
  const spinner = document.getElementById("loadingSpinner")
  spinner.classList.remove("hidden")

  // Optional: Add some dynamic behavior
  let dots = 0
  const loadingText = spinner.querySelector("p")
  const originalText = "Loading"

  loadingInterval = setInterval(() => {
    dots = (dots + 1) % 4
    loadingText.textContent = originalText + ".".repeat(dots)
  }, 500)

  console.log("Loading animation started")
}

function stopLoadingAnimation() {
  const spinner = document.getElementById("loadingSpinner")
  spinner.classList.add("hidden")

  // Clear the interval
  if (loadingInterval) {
    clearInterval(loadingInterval)
  }

  console.log("Loading animation stopped")
}

// Utility function to demonstrate reusable code
function addTemporaryClass(element, className, duration = 1000) {
  element.classList.add(className)
  setTimeout(() => {
    element.classList.remove(className)
  }, duration)

  return `Added ${className} class for ${duration}ms`
}

// Initialize page interactions when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("Interactive Web Experience loaded!")
  console.log("This demonstrates:")
  console.log("1. CSS3 transitions and keyframe animations")
  console.log("2. JavaScript functions with parameters and return values")
  console.log("3. Local vs global scope")
  console.log("4. Dynamic CSS class manipulation for animations")

  // Add some initial interactivity
  const sections = document.querySelectorAll(".section")
  sections.forEach((section, index) => {
    section.style.animationDelay = `${index * 0.2}s`
  })
})

// Close modal when clicking outside of it
window.addEventListener("click", (event) => {
  const modal = document.getElementById("modal")
  if (event.target === modal) {
    closeModal()
  }
})

// Keyboard accessibility for modal
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    const modal = document.getElementById("modal")
    if (!modal.classList.contains("hidden")) {
      closeModal()
    }
  }
})
