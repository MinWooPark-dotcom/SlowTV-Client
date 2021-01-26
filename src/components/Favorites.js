// 원래 페이보릿.js
import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
// import SideContainer from "../../containers/SideContainer";
import FakeSideContainer from "../containers/FakeSideContainer";
import SideRemoteControlContainer from "../containers/SideRemoteControlContainer";
import NavContainer from "../containers/NavContainer";
import ModalContainer from "../containers/ModalContainer";
// import ThumbnailsContainer from "../../containers/ThumbnailsContainer";
// import HamburgerContainer from "../../containers/SideContainer";
import "../components/contents/Water.css";
import FavoritesEntry from "./FavoritesEntry";
// import FavoriteEntryContainer from "../containers/FavoritesEntryContainer";
import Test from "./test.js";
import axios from "axios";
import "./Favorites.css";
import outlineLike from "../img/OutlineLike.png";
import fillLike from "../img/FillLike.png";

const Favorites = ({
  id,
  handleOnClick,
  history,
  isClicked,
  isModalClicked,
  // handleOnClickModal,
  videoData,
  clickThumbnail,
  addFavorites,
  isAddFavoirtes,
  isLoggedIn,
  handleOnClickCategory,
}) => {
  // console.log("🚀 ~ file: Favorites.js ~ line 31 ~ videoData", videoData);
  // ! 썸네일 클릭 시 비디오 아이디 구하기 -> 비디오 플레이어에서 해당 아이디 영상 재생
  // const getVideoId = (e) => {
  //   const id = e.target.attributes.value.value;
  //   console.log("🚀 ~ file: Water.js ~ line 36 ~ getVideoId ~ id", id);
  //   clickThumbnail(id);
  // };

  // ! 즐겨찾기 수정 후 비디오 새로고침
  const handleGoCategory = async (e) => {
    // const category = e.target.attributes.value.value;
    const video = await axios(`https://mayweather24.com/favorites`, {
      withCredentials: true,
    });
    console.log(
      "🚀 ~ file: FakeSide.js ~ line 15 ~ handleGoCategory ~ video",
      video.data.userFavorites
    );
    handleOnClickCategory(video.data.userFavorites);
  };

  // ! 썸네일 클릭 시 비디오 아이디 구하기 -> 비디오 플레이어에서 해당 아이디 영상 재생
  const getVideoData = async (e) => {
    const videoId = e.target.attributes.value.value; // ! 제거 시 여기서 에러
    const id = videoId.split(" ")[0];
    const isAdded = videoId.split(" ")[1];

    // ! 썸네일 클릭 시 -> 영상 재생
    if (!isAdded) {
      clickThumbnail(id);
    } else if (isLoggedIn && isAdded) {
      // ! 추가
      const video = videoData.filter((data) => data.id === Number(id));
      if (isAdded === "undefined") {
        const favorites = await axios.post(
          "https://mayweather24.com/add-favorite",
          {
            link: video[0].contentlink,
          },
          {
            withCredentials: true,
          }
        );
        console.log(
          "🚀 ~ file: Water.js ~ line 50 ~ getVideoData ~ favorites",
          favorites
        );

        handleGoCategory();
      } else if (isLoggedIn && isAdded) {
        // ! 제거
        const favorites = await axios.post(
          "https://mayweather24.com/delete-favorite",
          {
            link: video[0].contentlink,
          },
          {
            withCredentials: true,
          }
        );
        console.log(
          "🚀 ~ file: Water.js ~ line 50 ~ getVideoData ~ favorites",
          favorites
        );

        handleGoCategory();
      }
    } else if (!isLoggedIn) {
      // 얼럿 말고 직접 만들기
      alert("로그인 시 사용 가능합니다 맨 마지막 분기.");
    }
  };

  // ! videoData mapping
  let videoList = null;
  if (videoData) {
    console.log("🚀 ~ file: Favorites.js ~ line 47 ~ videoData", videoData);
    videoList = videoData.map((video) => (
      <div className="favorites_page_thumbnail" key={video.id}>
        {console.log("🚀 ~ file: Favorites.js ~ line 146 ~ video", video)}
        <div
          className="favorites_page_thumbnail__btn_box"
          // ! 버튼이 추가되면서 이미지에서 클릭 안 됨. -> btn_box로 이동
          value={video.id}
          onClick={getVideoData}
        >
          <div
            className="favorites_page_thumbnail__btn"
            value={`${video.id} ${video.isFavorite}`}
          >
            {video.isFavorite ? (
              <img
                className="water_page_thumbnail__btn_icon"
                src={fillLike}
                alt="fillLike"
                value={`${video.id} ${video.isFavorite}`}
              ></img>
            ) : (
              <img
                className="water_page_thumbnail__btn_icon"
                src={outlineLike}
                alt="outlineLike"
                value={`${video.id} ${video.isFavorite}`}
              ></img>
            )}
          </div>
        </div>
        <img
          className="favorites_page_thumbnail_img"
          src={video.thumbnail}
          alt="undefined thumbnail"
          // ! 버튼이 추가되면서 이미지에서 클릭 안 됨. -> btn_box로 이동
          // onClick={getVideoId}
          // value={video.id}
        ></img>
      </div>
    ));
  }

  return (
    <div className="favorites_page">
      {/* //! 비디오 데이터 없으면 */}
      {!videoData ? (
        isLoggedIn ? (
          <div className="loaded_favorites_page">
            <NavContainer />
            <SideRemoteControlContainer />
            {isModalClicked ? <ModalContainer /> : <div></div>}
            <div>아직 추가한 즐겨찾기가 없습니다.</div>
          </div>
        ) : (
          <div className="loaded_favorites_page">
            <NavContainer />
            <SideRemoteControlContainer />
            {isModalClicked ? <ModalContainer /> : <div></div>}
            <div>로그인 후 이용해 주세요.</div>
          </div>
        )
      ) : (
        <div className="loaded_favorites_page">
          {/* //! 비디오 데이터 있을 때, 페이보릿이 몇 개인지 모르기 때문에 맵으로 뿌려줘야 할 듯 */}
          {/* <Nav /> */}
          <NavContainer />
          <SideRemoteControlContainer />
          {isModalClicked ? <ModalContainer /> : <div></div>}
          {/* <Test /> */}
          {/* 썸네일 컨테이너 */}
          <div className="favorites_page_container">
            {/* thumbnail x 12 */}
            <div className="water_page_small_size_lists">{videoList}</div>
          </div>
          {/* 썸네일 컨테이너 끝 */}
        </div>
      )}
    </div>
  );
};

export default withRouter(Favorites);
