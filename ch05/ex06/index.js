try {
  console.log("TRY"); // 1
  throw error;
} catch (e) {
  console.log("CATCH", e); // 2
} finally {
  console.log("finally"); // 3
}

try {
  console.log("TRY"); // 1
} catch (e) {
  console.log("CATCH", e);
} finally {
  console.log("finally"); // 2
}
