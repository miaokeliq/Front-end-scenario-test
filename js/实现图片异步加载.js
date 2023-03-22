function imageLoadAsync(url) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.src = url;
    img.onload = () => {
      console.log("图片处理逻辑");
      resolve();
    };
    img.onerror = (error) => {
      console.log("处理逻辑");
      reject(error);
    };
  });
}

imageLoadAsync("url").then(
  () => {
    console.log("加载成功");
  },
  (error) => {
    console.log("加载失败：", error);
  }
);
