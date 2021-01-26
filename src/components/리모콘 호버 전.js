.remote_control {
  width: 18%;
  height: 100%;
  /* position: relative; */
  float: right;
}

.remote_control_box {
  /* border: 3px solid red; */
  position: absolute;
  top: 15%;
  /* left: 48%; */
  right: 3%;
  width: 10%;
  height: 80%;
  /* transform: rotate(-35deg) skew(deg, 5deg); */
}

.remote_control_box:hover {
  transition: all 0.25s linear;
}

.list_item {
  display: block;
  background-color: black;
  border-bottom: 1px solid #060606;
  /* color: #575757; */
  /* color: white; */
  color: #a3a2a2;
  text-align: center;
  width: 100%;
  height: 12.5%;
  /* vertical-align: middle; */
  line-height: 3.5vmax;
  font-size: 1vmax;

  box-shadow: 2em 1.5em 0 #3d3b3d;
  transition: all 0.25s linear;
  /* text-decoration: none; */
  /* 이거 없으면 호버 시 모양 깨짐 */
  position: relative;
}

.list_item:hover {
  background: #ff6e42;
  color: #fffcfb;
  transform: translate(-0.9em, -0.9em, 0.9em);
  transition: all 0.25s linear;
}

/* //! 옆면 세로*/
.list_item::before {
  background: #b65234;
  width: 1em;
  /* 옆면 세로의 길이 */
  height: 5.3em;
  bottom: 0.4em;
  right: -1em;
  background: #121212;
  -webkit-transform: skewY(-45deg);
}

/* hover */
.list_item:hover::before {
  background: #b65234;
  width: 1em;
  /* 옆면 세로의 길이 */
  height: 5.3em;
  bottom: 0.4em;
  right: -1em;
}

/* //! 옆면 가로 */
.list_item:nth-child(1):nth-child(1)::after {
  background: #181818;
  width: 1em;
  height: 10.2em;
  /* 옆면 가로의 세로 위치 */
  bottom: 0.5em;
  /* 옆면 가로 위치 */
  /* left: 41.5%; */
  left: 5em;
  /* transform: rotate(90deg) skew(0, 45deg); */
  transform: rotate(90deg) skew(0, 45deg);
}

.list_item:nth-child(1):hover::after {
  background: #b65234;
  width: 1em;
  height: 10.2em;
  /* 옆면 가로의 세로 위치 */
  bottom: 0.5em;
  /* 옆면 가로 위치 */
  /* left: 41.5%; */
  left: 5em;
}

/* //! 옆면 가로, 세로 모두 */
.list_item:hover::before,
.list_item:nth-child(1):hover::after {
  transition: all 0.25s linear;
}

.list_item::before,
.list_item:nth-child(1)::after {
  content: "";
  /* width: 8%; */
  position: absolute;
  /* transition: all 0.25s linear; */
}
