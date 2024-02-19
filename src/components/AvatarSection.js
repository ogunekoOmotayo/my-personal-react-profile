import omotayopic from "./images/omotayopic.jpg";
import { Icons } from "./IconSection";

export const AvatarSection = (props) => {
	console.log(props);
	const emailClickHandler = () =>
		(window.location.href = "mailto: ogunekoomotayo@gmail.com");

	const linkedinClickHandler = () =>
		(window.location.href =
			"https://www.linkedin.com/in/oguneko-omotayo-122884260");

	return (
		<div className=" w-full md:w-2/3 grid grid-cols-1 i justify-center mx-auto md:h-full bg-[#e7d5a3]">
			<div>
				<div>
					<div className=" bg-profilePicBgImg w-full h-44 bg-cover">
						<div className=" w-fit h-fit relative top-24 left-5">
							<img src={omotayopic} alt="omo" className=" rounded-full  " />;
						</div>
						;
					</div>
				</div>
				<div className=" pt-20 pl-2">
					<h1 className="text-xl text-orange-600 font-semibold">
						{props.userName}
					</h1>
					<p className=" text-[goldenrod] font-semibold">{props.Role}</p>
					<div className="flex py-5  ">
						<button
							onClick={emailClickHandler}
							className="profile_btn bg-[#c99853] text-[#e7d5a3]  mr-3"
						>
							<i
								className="fas fa-envelope text-sm mr-1 text-orange-600"
								aria-hidden="true"
							></i>
							Email
						</button>
						<button
							onClick={linkedinClickHandler}
							className="profile_btn border-2 border-[#c99853] text-goldencream mr-3"
						>
							<i
								className="fab fa-linkedin text-sm mr-1 text-orange-600"
								aria-hidden="true"
							></i>
							Linkedin
						</button>
					</div>
				</div>
			</div>
			<Icons />
		</div>
	);
};
