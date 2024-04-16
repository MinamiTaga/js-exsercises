export function addMyCall(f) {
  
  f.myCall = function (...args) {
      return f.bind(null)(...args);
    }
  
}