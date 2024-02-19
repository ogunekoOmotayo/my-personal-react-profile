import { AvatarSection } from "./components/AvatarSection";
import { Main } from "./components/Main";
import { data } from "./components/dataStore";

export const App = () => {
	return (
		<div className=" bg-overallBgImg bg-cover h-fit md:h-full font-[Poppins] text-sm text-gray-800 ">
			<div className=" bg-overallBgOpacity h-fit md:h-full ">
				<div className=" grid md:grid-cols-2 h-full">
					<AvatarSection userName={data.userName} Role={data.Role} />
					<Main />
				</div>
			</div>
		</div>
	);
};
