import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your HTML here:

const customHtml = `
<meta name="yandex-verification" content="d3803408f882bda4" />
`;

const EmbedHTML = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		ref.current.innerHTML = customHtml;
	}, []);
	return <div {...props} ref={ref} />;
};

export default atomize(EmbedHTML)({
	name: "EmbedHTML",
	normalize: true,
	mixins: true
});