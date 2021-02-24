const i = 1;

try {
  k = i + j;
} catch (err) {
  console.log("err: " + err.message);
} finally {
  console.log("処理は終了しました");
}
