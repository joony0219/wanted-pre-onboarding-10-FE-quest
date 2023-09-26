const getApi = document.querySelector("#getApi");
const mockName = document.querySelector("#mockName");
const mockID = document.querySelector("#mockID");

getApi.addEventListener("click", () => {
  const apiUrl = "https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock";

  // API 호출
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("API 호출이 실패했습니다.");
      }
      return response.json();
    })
    .then((data) => {
      mockName.textContent = `이름: ${JSON.stringify(data[0].name)}`;
      mockID.textContent = `아이디: ${JSON.stringify(data[0].id)}`;
    })
    .catch((error) => {
      console.error("API 호출 중 오류 발생:", error);
    });
});
