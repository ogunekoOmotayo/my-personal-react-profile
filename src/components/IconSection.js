export const Icons = () => {
	const twitterLink = () =>
		(window.location.href = "https://www.twitter.com/@babytayo3");
	const facebookLink = () =>
		(window.location.href = "https://www.facebook.com/oguneko-omotayo");
	const githubLink = () =>
		(window.location.href = "https://github.com/babytayo?tab=repositories");

	const instagramLink = () =>
		(window.location.href = "https://www.instagram.com/cmr_babytayo/");

	return (
		<div className="flex items-center justify-center gap-4 py-5">
			<i className="fab fa-twitter-square iconstyle" onClick={twitterLink}></i>
			<i className="fab fa-facebook iconstyle" onClick={facebookLink}></i>
			<i className="fab fa-github iconstyle" onClick={githubLink}></i>
			<i className="fab fa-instagram iconstyle" onClick={instagramLink}></i>
		</div>
	);
};
