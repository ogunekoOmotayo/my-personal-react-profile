import { stacksData } from "./dataStore";
import { footerData } from "./dataStore";
export const Main = (props) => {
	console.log(props);
	return (
		<main className="grid px-2 py-4 md:py-2 md:p-4 lg:p-8 text-sm text-justify">
			<div>
				{stacksData.map((data) => {
					const {
						title,
						text,
						subHeading1,
						subHeading2,
						subHeading3,
						subtext1,
						subtext2,
						subtext3,
					} = data;
					return (
						<div className="py-3">
							<div>
								<h1>
									<b>{title}</b>
								</h1>
								<div>
									<p>{text}</p>
								</div>
							</div>
							{/* Stacks Array List*/}
							<div className="py-5">
								<h1>
									<b>{subHeading1}</b>
								</h1>
								<p>{subtext1}</p>
								<h1>
									<b>{subHeading2}</b>
								</h1>
								<p>{subtext2}</p>
								<h1>
									<b>{subHeading3}</b>
								</h1>
								<p>{subtext3}</p>
							</div>
						</div>
					);
				})}
			</div>
			<footer className="flex font-bold text-veryLightcream py-8">
				{footerData.map((footData) => {
					const { footerText } = footData;
					return (
						<p className="w-fit">
							{footerText}
							<span className=" text-orange-600 font-extrabold"> | </span>
						</p>
					);
				})}
			</footer>
		</main>
	);
};
