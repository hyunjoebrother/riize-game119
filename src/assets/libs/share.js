export const shareKakao = () => {
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init("84729ad99d624bfd077bed56c6e2a4d6");
    }

    kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "생카데이",
        description: "생카 정보는, 생카데이로 한 번에! 같이 생일카페 갈래?!🎶",
        imageUrl: "https://saengcaday.com/og-image.jpg",
        link: {
          mobileWebUrl: "https://saengcaday.com",
          webUrl: "https://saengcaday.com",
        },
      },
      buttons: [
        {
          title: "생일카페 구경하기🎂🥳",
          link: {
            mobileWebUrl: "https://saengcaday.com",
            webUrl: "https://saengcaday.com",
          },
        },
      ],
    });
  }
};

export const shareTwitter = () => {
  let sendText = "생카 정보는, 생카데이로 한 번에! 같이 생일카페 갈래?!🥳🎶";
  let sendUrl = "https://saengcaday.com";
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
