const userAgent = document.getElementById("userAgent");
const language = document.getElementById("language");
const cpu = document.getElementById("hardWareInfo");

userAgent.textContent = `${navigator.userAgent}`;
language.textContent = `${navigator.language}`;
cpu.textContent = `${navigator.hardwareConcurrency}`;
