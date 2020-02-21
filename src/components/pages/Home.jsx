import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Common/header.jsx";
import tv from "../../resources/images/mainPage/tv.png";
import tvLight from "../../resources/images/mainPage/tv_light.png";
import logoSymbol from "../../resources/images/mainPage/logo_symbol.png";
import cassette from "../../resources/images/mainPage/cassette.png";
import sideBookBg from "../../resources/images/mainPage/side_book_bg.png";
import doubleQuoteStart from "../../resources/images/common/double_quote_start.png";
import doubleQuoteEnd from "../../resources/images/common/double_quote_end.png";
import bookSample from "../../resources/images/mainPage/book_sample.png";
import bookSample2 from "../../resources/images/mainPage/book_sample2.png";
import bookSample3 from "../../resources/images/mainPage/book_sample3.png";
import bookMore from "../../resources/images/mainPage/arrow.svg";
import "./Home.scss";
import { HomeBook } from "../molecules";
import { LocationRegister } from "../organisms";
const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
const Home = () => {
	const [visible, setVisible] = useState(false);
	const [newlyBook, setNewlyBook] = useState("");
	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get(
				`http://boiled-egg-api.jaeyeonling.com:8080/books`,
				{
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json"
					}
				}
			);
			console.log(result);
			// setData(result.data);
		};
		fetchData();
	}, [newlyBook]);

	const preventDefaultForScrollKeys = e => {
		if (keys[e.keyCode]) {
			preventDefault(e);
			return false;
		}
	};

	const preventDefault = e => {
		e = e || window.event;
		if (e.preventDefault) e.preventDefault();
		e.returnValue = false;
	};

	const disableScroll = e => {
		const newLocal = document.querySelector(".Home");
		e.stopPropagation();
		newLocal.onwheel = preventDefault; // modern standard
		newLocal.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
		newLocal.ontouchmove = preventDefault; // mobile
		document.onkeydown = preventDefaultForScrollKeys;
	};

	const handleClickRegisterLocation = () => {
		setVisible(!visible);
	};

	const handleScroll = e => {
		disableScroll(e);
		// -1:up 1:down
		let direction;
		if (e.deltaY) {
			direction = e.deltaY > 0 ? 1 : -1;
			window.scrollBy(20 * direction, 0);
		}
		if (e.deltaX) {
			direction = e.deltaX > 0 ? 1 : -1;
			window.scrollBy(20 * direction, 0);
		}
	};
	return (
		<main className="Home" onWheel={handleScroll}>
			<Header />
			{visible ? <LocationRegister setVisible={setVisible} /> : ""}
			<div className="Home_div-title">
				<h1>
					나와 가장 <br />
					가까운 <b>책방</b>
				</h1>
				<img className="" alt={logoSymbol} src={logoSymbol}></img>
				<div className="Home_arrow"></div>
				<div className="Home_div-search">"지금당장 읽고싶은 책"</div>
			</div>
			<div className="Tv">
				<img className="Tv_img-tv" alt={tv} src={tv}></img>
				<img
					className="Tv_img-tv-light"
					alt={tvLight}
					src={tvLight}
				></img>
			</div>
			<div className="Home_flex_box">
				<div className="Home_flex_box-item">
					<img src={cassette} />
					<button
						className="Home_button-location"
						onClick={handleClickRegisterLocation}
					>
						내 위치
						<br />
						재설정
					</button>
				</div>
				<div className="Home_flex_box-item">
					<img src={sideBookBg} />
				</div>
			</div>
			<div></div>
			<div className="Best">
				<HomeBook
					color="red"
					imgUrl={bookSample}
					blockTitle={"가장\n인기있는\n도서"}
					bookTitle={"무례한 사람에게 웃으며 대처하는 법"}
				/>
				<HomeBook
					color="green"
					imgUrl={bookSample2}
					blockTitle={"나와\n가까운\n도서"}
					bookTitle={"죽고\n싶지만\n떡볶이는\n먹고\n싶어"}
				/>
				<HomeBook
					color="yellow"
					imgUrl={bookSample3}
					blockTitle={"방금\n올라온\n도서"}
					bookTitle={"나는\n나로\n살기로\n했다"}
				/>
			</div>
			<div className="Home_div-quotes">
				<img src={doubleQuoteStart}></img>
				<img src={doubleQuoteEnd}></img>
			</div>
			<div className="go-to-list">
				more<img src={bookMore} alt={bookMore}></img>
			</div>
		</main>
	);
};

export default Home;
