export const shareKakao = () => {
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init("4b6122f83be0277c63fc68efb9f08436");
    }

    kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "3D 손병호게임 (K-HANDGAME)",
        description:
          "손병호게임 (K-HANDGAME) 3D로 즐기기! 초대장 받은 사람 접어✋🏻😎",
        imageUrl: "https://riize-game119.pages.dev/logo192.png",
        link: {
          mobileWebUrl: "https://riize-game119.pages.dev/",
          webUrl: "https://riize-game119.pages.dev/",
        },
      },
      buttons: [
        {
          title: "손가락 접을 사람✋🏻",
          link: {
            mobileWebUrl: "https://riize-game119.pages.dev/",
            webUrl: "https://riize-game119.pages.dev/",
          },
        },
      ],
    });
  }
};

export const shareTwitter = () => {
  let sendText =
    "손병호게임 (K-HANDGAME) 3D로 즐기기! 초대장 받은 사람 접어✋🏻😎";
  let sendUrl = "https://riize-game119.pages.dev/handgame";
  window.open(
    "https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl
  );
};

export const handleCopyClipBoard = (text) => {
  try {
    navigator.clipboard.writeText(text).then((res) => {
      alert("링크 복사 완료!");
    });
  } catch (error) {
    alert("복사 실패!!");
  }
};
