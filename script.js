// 1. Selecionando os elementos do DOM
const timeElement = document.getElementById("time")
const dateElement = document.getElementById("date")
const themeBtn = document.getElementById("theme-btn")
const iconSpan = document.getElementById("icon")
const btnTextSpan = document.getElementById("btn-text")

// 2. Função para atualizar o relógio
function updateClock() {
  const now = new Date()

  // Pegando hora, minuto e segundo
  let h = String(now.getHours()).padStart(2, "0")
  let m = String(now.getMinutes()).padStart(2, "0")
  let s = String(now.getSeconds()).padStart(2, "0")

  // Atualizando o HTML
  timeElement.textContent = `${h}:${m}:${s}`

  // Extra: Atualizando a data (Formato completo em PT-BR)
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  dateElement.textContent = now.toLocaleDateString("pt-BR", dateOptions)
}

// 3. Função para alternar o tema com animação
themeBtn.addEventListener("click", () => {
  const clockContainer = document.querySelector(".clock-container")
  clockContainer.classList.add("trocando-tema")
  setTimeout(() => {
    document.body.classList.toggle("dark-mode")
    const isDark = document.body.classList.contains("dark-mode")
    if (isDark) {
      iconSpan.textContent = "☀️"
      btnTextSpan.textContent = "Modo Claro"
    } else {
      iconSpan.textContent = "🌙"
      btnTextSpan.textContent = "Modo Escuro"
    }
    clockContainer.classList.remove("trocando-tema")
  }, 300)
})
setInterval(updateClock, 1000)

updateClock()
