import React from "react";
import theme from "theme";
import { Theme, Image, Button, Box, Text, Link } from "@quarkly/widgets";
import { Override, StackItem, Menu, Stack, Section, GoogleMap, SocialMedia } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Section
			sm-height="90px"
			sm-padding="18px 0 0px 0"
			height="90px"
			padding="24px 0 24px 0"
			background="#181818"
		>
			<Stack>
				{"    "}
				<StackItem width="25%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Image loading="lazy" width="163px" src="https://uploads.quarkly.io/5f59fc4b0fb50e001fbe835e/images/logo.svg?v=2020-09-10T15:12:31.702Z" />
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" lg-width="75%">
					<Override
						slot="StackItemContent"
						md-justify-content="flex-end"
						lg-justify-content="flex-end"
						justify-content="center"
						sm-align-items="center"
						align-items="center"
					/>
					{"        "}
					<Menu
						display="flex"
						md-display="none"
						lg-display="none"
						margin="0px 25px 0px 0px"
						ssl-margin="0px 20px 0px 0px"
					>
						<Override slot="link-404" display="none" />
						<Override
							slot="link"
							color="#ffffff"
							text-decoration-line="initial"
							font="normal 300 17px/22px --fontFamily-googlePtSans"
							hover-color="#02E4C0"
						/>
						<Override slot="link-active" color="#4BAE4F" />
						<Override
							slot="item"
							padding="6px 15px 6px 15px"
							margin="0px 0px 0px 0px"
							font="16px/24px --fontFamily-googleInter"
							color="#ffffff"
						/>
						<Override slot="item-404" md-display="none" ssl-display="none" />
						<Override slot="item-c-2020" display="none" />
						<Override slot="item-index" display="none" />
						<Override slot="item-contacts" display="none" />
						<Override slot="item-sontact" color="#02E4C0" />
						<Override slot="link-sontact" color="#ffffff" />
					</Menu>
					<Components.BurgerMenu display="none" lg-display="block" lg-color="#ffffff">
						<Override slot="icon,icon-close" category="fa" icon="FaAffiliatetheme" />
						<Override
							slot="menu"
							lg-position="absolute"
							lg-left="0px"
							lg-top="84px"
							lg-right="0px"
							lg-background="#181818"
							lg-box-shadow="0px 5px 15px rgba(19, 32, 38, 0.1)"
							sm-height="100vh"
							lg-height="100vh"
						>
							<Override slot="item-404" display="none" />
							<Override
								slot="item"
								sm-align-items="center"
								sm-justify-content="center"
								sm-flex-direction="column"
								sm-font="40px/48px --fontFamily-googlePtSerif"
								lg-text-align="center"
								lg-color="#ffffff"
								lg-font="30px/45px --fontFamily-googlePtSerif"
								lg-margin="0px 0px 0px 0px"
								lg-padding="6px 12px 13px 12px"
							/>
							<Override
								slot="link"
								lg-text-decoration-line="initial"
								lg-text-align="center"
								lg-color="#ffffff"
								lg-margin="0px 0px 0px 0px"
								lg-font="30px/56px --fontFamily-googleInter"
							/>
							<Override slot="link-c-2020" lg-color="#263238" lg-font="500 16px/22px --fontFamily-googlePtSans" />
							<Override slot="item-c-2020" lg-margin="60px 0px 24px 0px" />
							<Override slot="item-glavnaya" lg-margin="70px 0px 0px 0px" />
							<Override slot="item-index" lg-display="none" />
							<Override slot="item-contacts" lg-display="none" />
						</Override>
					</Components.BurgerMenu>
					{"    "}
				</StackItem>
				<StackItem width="25%" display="flex" lg-display="none">
					<Override slot="StackItemContent" justify-content="flex-start" align-items="center" />
					{"        "}
					<Button
						background="rgba(0, 119, 204, 0)"
						border-width="1px"
						border-style="solid"
						font="normal 300 17px/25px --fontFamily-googleInter"
						letter-spacing="0.2px"
						padding="11px 34px 12px 34px"
						transition="all 1s ease 0s"
						hover-transform="translateY(-10px)"
					>
						Login
					</Button>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section
			background="#181818"
			padding="24px 0 750px 0"
			position="relative"
			lg-padding="24px 0 400px 0"
			sm-padding="50px 0 368px 0"
			md-padding="24px 0 300px5 0"
		>
			<Box
				width="100%"
				height="100%"
				position="absolute"
				left="0px"
				z-index="2"
				background="linear-gradient(180deg,rgba(0, 119, 204, 0) 0%,rgba(24, 24, 24, 0.57) 100%) 0 0 no-repeat"
			/>
			<Stack>
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" align-items="center" />
					{"        "}
					<Text
						font="normal 300 80px/88px --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
						letter-spacing="0.2px"
						color="#ffffff"
						sm-font="normal 300 52px/62px --fontFamily-googleInter"
					>
						Work
					</Text>
					<Components.TextBeg
						interval="2000"
						list-style-type="fast, smart, effectivel, on the team, independently"
						color="#02E4C0"
						font="80px/88px --fontFamily-googleInter"
						sm-font="52px/62px --fontFamily-googleInter"
					/>
					<Text
						font="20px/30px --fontFamily-googleInter"
						letter-spacing="0.2px"
						color="#ffffff"
						margin="37px 0px 85px 0px"
						sm-text-align="center"
						sm-font="20px/30px --fontFamily-googleInter"
						sm-margin="37px 0px 67px 0px"
					>
						Most calendars are designed for teams. Slate is designed for{" "}
						<br />
						freelancers who want a simple way to plan their schedule.
					</Text>
					<Box sm-display="flex" sm-flex-direction="column">
						<Button
							background="#4452FE"
							font="normal 300 17px/25px --fontFamily-googleInter"
							letter-spacing="0.2px"
							padding="17px 34px 18px 34px"
							hover-transform="translateY(-10px)"
							transition="all 1s ease 0s"
							margin="0px 35px 0px 0px"
							box-shadow="0px 4px 31px rgba(0, 0, 0, 0.15)"
							sm-margin="0px 0px 20px 0px"
						>
							Try For Free
						</Button>
						<Button
							background="rgba(0, 119, 204, 0)"
							border-width="1px"
							border-style="solid"
							font="normal 300 17px/25px --fontFamily-googleInter"
							letter-spacing="0.2px"
							padding="17px 34px 18px 34px"
							hover-transform="translateY(-10px)"
							transition="all 1s ease 0s"
						>
							Learn More
						</Button>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Box
				position="absolute"
				top="calc(50% - 426.98px/2 + 76.72px)"
				background="rgba(0, 0, 0, 0) url(https://ukit.top/quarkly/3/4-17-.webp) center/contain no-repeat scroll padding-box"
				height="700px"
				left="0px"
				lg-bottom="-247px"
				lg-height="788px"
				lg-right="auto"
				lg-top="auto"
				lg-width="100%"
				md-top="auto"
				md-right="auto"
				md-bottom="-259px"
				md-left="0px"
				lg-left="0px"
				width="100%"
				sm-top="auto"
				sm-bottom="-32px"
				sm-left="0px"
				sm-width="100%"
				sm-height="486px"
			/>
		</Section>
		<Section
			background="#181818"
			padding="80px 0 80px 0"
			lg-position="relative"
			lg-z-index="2"
			md-align-items="center"
			md-justify-content="center"
			sm-padding="30px 0 80px 0"
		>
			<Override slot="SectionContent" max-width="1100px" sm-align-items="center" sm-justify-content="center" />
			<Stack width="100%">
				{"    "}
				<StackItem width="100%" display="flex" lg-align-items="center" lg-justify-content="center">
					<Override slot="StackItemContent" align-items="center" justify-content="center" flex-direction="column" />
					{"        "}
					<Text color="#ffffff" font="52px/62px --fontFamily-googleInter" letter-spacing="0.2px" sm-font="36px/62px --fontFamily-googleInter">
						Features
					</Text>
					<Text
						font="20px/30px --fontFamily-googleInter"
						letter-spacing="0.2px"
						color="#ffffff"
						margin="27px 0px 100px 0px"
						text-align="center"
						lg-margin="27px 0px 62px 0px"
					>
						Most calendars are designed for teams. Slate is designed for{" "}
						<br />
						freelancers who want a simple way to plan their schedule.
					</Text>
					<Stack width="100%">
						{"    "}
						<StackItem width="75%" display="flex" lg-width="100%" lg-margin="0px 0px 50px 0px">
							<Override slot="StackItemContent" lg-justify-content="flex-start" />
							{"        "}
							<Box position="relative">
								<Image
									loading="lazy"
									width="100%"
									src="https://uploads.quarkly.io/5f59fc4b0fb50e001fbe835e/images/Chat%20Bot.webp?v=2020-09-10T14:12:30.493Z"
									md-width="100%"
									lg-width="100%"
								/>
								<Components.Imagecrut
									position="absolute"
									bottom="151px"
									height="191px"
									left="68px"
									right="auto"
									top="auto"
									width="190px"
									lg-bottom="52px"
									lg-left="49px"
									lg-right="auto"
									lg-top="auto"
									md-width="140px"
									md-top="auto"
									md-right="auto"
									md-bottom="51px"
									md-left="43px"
									md-height="140px"
									sm-top="auto"
									sm-right="auto"
									sm-bottom="36px"
									sm-left="26px"
									sm-width="94px"
									sm-height="94px"
									compmini-bottom="302px"
									compmini-left="49px"
									compmini-right="auto"
									compmini-top="auto"
								/>
								<Image
									loading="lazy"
									width="400px"
									src="https://ukit.top/quarkly/3/features-image-2-2x.webp"
									position="absolute"
									bottom="100px"
									height="275.375px"
									left="auto"
									right="0px"
									top="auto"
									lg-bottom="-38px"
									lg-left="auto"
									lg-right="-26px"
									lg-top="auto"
									md-width="282px"
									md-top="auto"
									md-right="-35px"
									md-bottom="-124px"
									md-left="auto"
									md-height="365.375px"
									lg-width="50%"
									lg-height="240.375px"
									sm-width="150px"
									sm-height="150px"
									sm-top="auto"
									sm-right="50px"
									sm-bottom="-17px"
									sm-left="auto"
									compmini-bottom="125px"
									compmini-left="auto"
									compmini-right="0px"
									compmini-top="auto"
								/>
							</Box>
							{"    "}
						</StackItem>
						{"    "}
						<StackItem
							width="25%"
							display="flex"
							lg-width="100%"
							lg-align-items="center"
							lg-justify-content="center"
						>
							<Override
								slot="StackItemContent"
								flex-direction="column"
								lg-flex-direction="row"
								lg-align-items="center"
								lg-justify-content="center"
								sm-flex-direction="column"
							/>
							{"        "}
							<Box
								display="flex"
								flex-direction="column"
								lg-width="30%"
								lg-margin="0px 3% 0px 0px"
								sm-width="100%"
							>
								<Image
									loading="lazy"
									width="24px"
									height="24px"
									src="https://ukit.top/quarkly/3/Vector.webp"
									margin="20px 0px 23px 0px"
									lg-margin="26px 0px 23px 0px"
								/>
								<Text
									font="normal 300 20px/30px --fontFamily-googleInter"
									margin="0px 0px 20px 0px"
									display="inline-block"
									color="#ffffff"
									letter-spacing="0.1px"
									lg-display="none"
								>
									A single source{" "}
									<br />
									of truth
								</Text>
								<Text
									font="normal 300 20px/30px --fontFamily-googleInter"
									margin="0px 0px 20px 0px"
									display="none"
									color="#ffffff"
									letter-spacing="0.1px"
									lg-display="block"
								>
									A single source
								</Text>
								<Text
									font="normal 300 16px/24px --fontFamily-googleInter"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="#ffffff"
									letter-spacing="0.2px"
								>
									When you add work to your{" "}
									<br />
									Slate calendar we automatically{" "}
									<br />
									calculate useful insights
									<br />
								</Text>
							</Box>
							<Box
								display="flex"
								flex-direction="column"
								lg-width="30%"
								lg-margin="0px 3% 0px 3%"
								sm-width="100%"
							>
								<Image
									loading="lazy"
									width="24px"
									height="24px"
									src="https://ukit.top/quarkly/3/Vector-1-.webp"
									margin="50px 0px 23px 0px"
								/>
								<Text
									font="normal 300 20px/30px --fontFamily-googleInter"
									margin="0px 0px 20px 0px"
									display="none"
									color="#ffffff"
									letter-spacing="0.1px"
									lg-display="block"
								>
									Intuitive interface
								</Text>
								<Text
									font="normal 300 20px/30px --fontFamily-googleInter"
									margin="0px 0px 20px 0px"
									display="inline-block"
									color="#ffffff"
									letter-spacing="0.1px"
									lg-display="none"
								>
									Intuitive
									<br />
									interface
								</Text>
								<Text
									font="normal 300 16px/24px --fontFamily-googleInter"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="#ffffff"
									letter-spacing="0.2px"
								>
									When you add work to your{" "}
									<br />
									Slate calendar we automatically{" "}
									<br />
									calculate useful insights{" "}
									<br />
									<br />
								</Text>
							</Box>
							<Box
								display="flex"
								flex-direction="column"
								lg-width="33%"
								lg-margin="0px 0px 0px 3%"
								sm-width="100%"
							>
								<Image
									loading="lazy"
									width="24px"
									height="24px"
									src="https://ukit.top/quarkly/3/Vector-2-.webp"
									margin="50px 0px 23px 0px"
								/>
								<Text
									font="normal 300 20px/30px --fontFamily-googleInter"
									margin="0px 0px 20px 0px"
									display="inline-block"
									color="#ffffff"
									letter-spacing="0.1px"
								>
									Or with rules
								</Text>
								<Text
									font="normal 300 16px/24px --fontFamily-googleInter"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="#ffffff"
									letter-spacing="0.2px"
								>
									When you add work to your{" "}
									<br />
									Slate calendar we automatically{" "}
									<br />
									calculate useful insights{" "}
									<br />
									<br />
								</Text>
							</Box>
							{"    "}
						</StackItem>
					</Stack>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#181818" padding="80px 0 80px 0">
			<Override slot="SectionContent" max-width="1100px" sm-align-items="center" sm-justify-content="center" />
			<Stack width="100%">
				{"    "}
				<StackItem width="100%" display="flex" sm-align-items="center" sm-justify-content="center">
					<Override slot="StackItemContent" align-items="center" justify-content="center" flex-direction="column" />
					{"        "}
					<Text font="52px/62px --fontFamily-googleInter" color="#ffffff" letter-spacing="0.2px" sm-font="36px/62px --fontFamily-googleInter">
						Contents
					</Text>
					<Text
						font="20px/30px --fontFamily-googleInter"
						letter-spacing="0.2px"
						color="#ffffff"
						margin="27px 0px 100px 0px"
						text-align="center"
						lg-margin="27px 0px 60px 0px"
					>
						Most calendars are designed for teams. Slate is designed for{" "}
						<br />
						freelancers who want a simple way to plan their schedule.
					</Text>
					<Stack width="100%">
						{"    "}
						<StackItem width="50%" display="flex" border-radius="10px" sm-width="100%">
							<Override
								slot="StackItemContent"
								flex-direction="column"
								align-items="center"
								justify-content="center"
								box-shadow="0px 4px 31px rgba(0, 0, 0, 0.15)"
								background="#fff"
								border-radius="10px"
								lg-margin="0px 10px 0px 10px"
								sm-margin="0px 0px 0px 0px"
							/>
							<Text font="500 20px/30px --fontFamily-googleInter" color="#000000" margin="50px 0px 15px 0px">
								Work
							</Text>
							<Text font="16px/24px --fontFamily-googleInter" color="#5C5C5C" text-align="center" margin="15px 0px 40px 0px">
								Ever wondered if you're too reliant{" "}
								<br />
								on a client for work? Slate helps{" "}
								<br />
								you identify .
							</Text>
							<Button
								background="#4452FE"
								font="normal 300 17px/25px --fontFamily-googleInter"
								letter-spacing="0.2px"
								padding="17px 34px 17px 34px"
								hover-transform="translateY(-10px)"
								transition="all 1s ease 0s"
								margin="0px 0px 80px 0px"
								box-shadow="0px 4px 31px rgba(0, 0, 0, 0.15)"
							>
								Sign Up
							</Button>
							<Image
								loading="lazy"
								width="405px"
								src="https://ukit.top/quarkly/3/content-laptop.webp"
								margin="0px 0px 44px 0px"
								lg-width="90%"
							/>
							{"            "}
						</StackItem>
						<StackItem width="50%" display="flex" border-radius="10px" sm-width="100%">
							<Override
								slot="StackItemContent"
								flex-direction="column"
								align-items="center"
								justify-content="center"
								box-shadow="0px 4px 31px rgba(0, 0, 0, 0.15)"
								background="#fff"
								border-radius="10px"
								overflow-x="hidden"
								overflow-y="hidden"
								position="relative"
							/>
							<Text
								background="#02E4C0"
								font="600 17px/25px sans-serif"
								width="155px"
								margin="0px 0px 0px 0px"
								padding="8px 0px 8px 0px"
								text-align="center"
								transform="rotate(45deg)"
								position="absolute"
								bottom="auto"
								height="25px"
								left="auto"
								right="-37px"
								top="19px"
								letter-spacing="0.2px"
								lg-padding="5px 0px 4px 0px"
								lg-top="16px"
								lg-right="-49px"
								lg-bottom="auto"
								lg-left="auto"
							>
								NEW
							</Text>
							<Text font="500 20px/30px --fontFamily-googleInter" color="#000000" margin="50px 0px 15px 0px">
								Design with real data
							</Text>
							<Text font="16px/24px --fontFamily-googleInter" color="#5C5C5C" text-align="center" margin="15px 0px 40px 0px">
								Ever wondered if you're too reliant{" "}
								<br />
								on a client for work? Slate helps{" "}
								<br />
								you identify .
							</Text>
							<Button
								background="#4452FE"
								font="normal 300 17px/25px --fontFamily-googleInter"
								letter-spacing="0.2px"
								padding="17px 34px 17px 34px"
								hover-transform="translateY(-10px)"
								transition="all 1s ease 0s"
								margin="0px 0px 30px 0px"
								box-shadow="0px 4px 31px rgba(0, 0, 0, 0.15)"
							>
								Try For Free
							</Button>
							<Image
								loading="lazy"
								width="412px"
								src="https://ukit.top/quarkly/3/content-interface.webp"
								margin="0px 0px 0px 0px"
								border-radius="20px"
								lg-width="100%"
							/>
							{"            "}
						</StackItem>
						{"    "}
					</Stack>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#181818" padding="80px 0 80px 0">
			<Override slot="SectionContent" sm-align-items="center" sm-justify-content="center" />
			<Stack width="100%">
				{"    "}
				<StackItem width="100%" display="flex" sm-align-items="center" sm-justify-content="center">
					<Override slot="StackItemContent" align-items="center" justify-content="center" flex-direction="column" />
					{"        "}
					<Text font="52px/62px --fontFamily-googleInter" color="#ffffff" letter-spacing="0.2px" sm-font="36px/62px --fontFamily-googleInter">
						Gallery
					</Text>
					<Text
						font="20px/30px --fontFamily-googleInter"
						letter-spacing="0.2px"
						color="#ffffff"
						margin="27px 0px 54px 0px"
						text-align="center"
					>
						We focus on ergonomics and meeting you where you work.{" "}
						<br />
						It's only a keystroke away.
					</Text>
					<Stack width="100%" margin="0px 0px 0px 0px" gap="--cmp-stack-gap-small">
						{"    "}
						<StackItem width="50%" display="flex" align-items="center" lg-width="100%">
							<Override slot="StackItemContent" align-items="center" justify-content="center" flex-direction="column" />
							{"        "}
							<Image
								loading="lazy"
								src="https://ukit.top/quarkly/3/gallery-image-1.webp"
								margin="0px 0px 44px 0px"
								width="100%"
								object-fit="cover"
								border-radius="20px"
								height="594px"
								lg-height="403px"
								lg-margin="0px 0px 0px 0px"
							/>
							{"    "}
						</StackItem>
						<StackItem width="50%" display="flex" lg-width="100%">
							<Override slot="StackItemContent" align-items="flex-start" justify-content="flex-start" flex-direction="column" />
							{"        "}
							<Image
								loading="lazy"
								src="https://ukit.top/quarkly/3/gallery-image-2.webp"
								margin="0px 0px 33px 0px"
								width="100%"
								height="176px"
								object-fit="cover"
								object-position="0% 68%"
								border-radius="20px"
								lg-height="254px"
							/>
							<Box display="flex">
								<Image
									loading="lazy"
									src="https://ukit.top/quarkly/3/gallery-image-3.webp"
									margin="0px 16px 33px 0px"
									width="50%"
									height="176px"
									object-fit="cover"
									object-position="0% 50%"
									border-radius="20px"
								/>
								<Image
									loading="lazy"
									src="https://ukit.top/quarkly/3/gallery-image-4.webp"
									margin="0px 0px 20px 16px"
									width="50%"
									height="176px"
									object-fit="cover"
									object-position="0% 68%"
									border-radius="20px"
								/>
							</Box>
							<Box display="flex">
								<Image
									loading="lazy"
									src="https://ukit.top/quarkly/3/gallery-image-5.webp"
									margin="0px 16px 0px 0px"
									width="50%"
									height="176px"
									object-fit="cover"
									object-position="50% 84%"
									border-radius="20px"
								/>
								<Image
									loading="lazy"
									src="https://ukit.top/quarkly/3/gallery-image-6.webp"
									margin="0px 16px 0px 16px"
									width="50%"
									height="176px"
									object-fit="cover"
									object-position="50% 68%"
									border-radius="20px"
								/>
								<Image
									loading="lazy"
									src="https://ukit.top/quarkly/3/gallery-image-7.webp"
									width="50%"
									height="176px"
									object-fit="cover"
									object-position="50% 68%"
									border-radius="20px"
									margin="0px 0px 0px 16px"
								/>
							</Box>
							{"    "}
						</StackItem>
						{"    "}
					</Stack>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#181818" padding="80px 0 80px 0">
			<Override slot="SectionContent" max-width="985px" sm-align-items="center" />
			<Stack width="100%">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" flex-direction="column" />
					{"        "}
					<Text font="52px/62px --fontFamily-googleInter" color="#ffffff" letter-spacing="0.2px">
						Partners
					</Text>
					<Text
						font="20px/30px --fontFamily-googleInter"
						letter-spacing="0.2px"
						color="#ffffff"
						margin="27px 0px 54px 0px"
						text-align="center"
					>
						We focus on ergonomics and meeting you where you work.{" "}
						<br />
						It's only a keystroke away.
					</Text>
					<Stack
						width="100%"
						margin="0px 0px 0px 0px"
						gap="--cmp-stack-gap-small"
						lg-align-items="center"
						lg-justify-content="center"
					>
						{"    "}
						<StackItem
							width="16.6666666667%"
							display="flex"
							align-items="center"
							lg-width="25%"
							sm-width="33.33%"
						>
							<Override slot="StackItemContent" align-items="center" justify-content="center" flex-direction="column" />
							{"        "}
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f59fc4b0fb50e001fbe835e/images/logos-apple-app-store.svg?v=2020-09-10T15:11:33.558Z"
								margin="0px 0px 44px 0px"
								width="60px"
								object-fit="cover"
								border-radius="20px"
							/>
							{"    "}
						</StackItem>
						<StackItem
							width="16.6666666667%"
							display="flex"
							align-items="center"
							lg-width="25%"
							sm-width="33.33%"
						>
							<Override slot="StackItemContent" align-items="center" justify-content="center" flex-direction="column" />
							{"        "}
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f59fc4b0fb50e001fbe835e/images/logos-apiary.svg?v=2020-09-10T15:12:11.340Z"
								margin="0px 0px 44px 0px"
								width="60px"
								object-fit="cover"
								border-radius="20px"
							/>
							{"    "}
						</StackItem>
						<StackItem
							width="16.6666666667%"
							display="flex"
							align-items="center"
							lg-width="25%"
							sm-width="33.33%"
						>
							<Override slot="StackItemContent" align-items="center" justify-content="center" flex-direction="column" />
							{"        "}
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f59fc4b0fb50e001fbe835e/images/logos-android-icon.svg?v=2020-09-10T15:11:50.144Z"
								margin="0px 0px 44px 0px"
								width="60px"
								object-fit="cover"
								border-radius="20px"
							/>
							{"    "}
						</StackItem>
						<StackItem
							width="16.6666666667%"
							display="flex"
							align-items="center"
							lg-width="25%"
							sm-width="33.33%"
						>
							<Override slot="StackItemContent" align-items="center" justify-content="center" flex-direction="column" />
							{"        "}
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f59fc4b0fb50e001fbe835e/images/logos-basecamp.svg?v=2020-09-10T15:11:04.682Z"
								margin="0px 0px 44px 0px"
								width="71px"
								object-fit="cover"
								border-radius="20px"
							/>
							{"    "}
						</StackItem>
						<StackItem
							width="16.6666666667%"
							display="flex"
							align-items="center"
							lg-width="24%"
							sm-width="33.33%"
						>
							<Override slot="StackItemContent" align-items="center" justify-content="center" flex-direction="column" />
							{"        "}
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f59fc4b0fb50e001fbe835e/images/logos-airbnb.svg?v=2020-09-10T15:10:26.823Z"
								margin="0px 0px 44px 0px"
								width="60px"
								object-fit="cover"
								border-radius="20px"
							/>
							{"    "}
						</StackItem>
						<StackItem
							width="16.6666666667%"
							display="flex"
							align-items="center"
							lg-width="25%"
							sm-width="33.33%"
						>
							<Override slot="StackItemContent" align-items="center" justify-content="center" flex-direction="column" />
							{"        "}
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f59fc4b0fb50e001fbe835e/images/logos-ibm.svg?v=2020-09-10T15:11:17.349Z"
								margin="0px 0px 44px 0px"
								width="149px"
								object-fit="cover"
								border-radius="0px"
								lg-border-radius="0px"
							/>
							{"    "}
						</StackItem>
						{"    "}
					</Stack>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#181818" padding="80px 0 80px 0" sm-padding="80px 0 50px 0">
			<Override slot="SectionContent" max-width="985px" sm-align-items="center" sm-justify-content="center" />
			<Stack width="100%">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" flex-direction="column" />
					{"        "}
					<Text font="52px/62px --fontFamily-googleInter" color="#ffffff" letter-spacing="0.2px">
						Testimonials
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="50%" display="flex" border-radius="10px" sm-width="100%">
					<Override
						slot="StackItemContent"
						border-color="#5C5C5C"
						border-radius="10px"
						border-width="1px"
						border-style="solid"
						flex-direction="column"
						padding="40px 40px 40px 40px"
					/>
					{"        "}
					<Box display="flex">
						<Image
							loading="lazy"
							width="64px"
							height="64px"
							src="https://ukit.top/quarkly/3/user-pic-Claire-Bell.webp"
							margin="0px 23px 0px 0px"
						/>
						<Box display="flex" flex-direction="column" justify-content="center">
							<Text color="#02E4C0" font="500 16px/24px --fontFamily-googleInter" margin="0px 0px 0px 0px">
								Claire Bell
							</Text>
							<Text font="500 16px/24px --fontFamily-googleInter" color="#ffffff" margin="0px 0px 0px 0px">
								Designer
							</Text>
						</Box>
					</Box>
					<Text
						font="normal 300 16px/24px --fontFamily-googleInter"
						margin="30px 0px 0px 0px"
						display="inline-block"
						color="#ffffff"
						width="90%"
					>
						I just wanted to share a quick note and let you know that you do a really good job. I'm glad I decided to work with you. Wonderful experience!
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" border-radius="10px" sm-width="100%">
					<Override
						slot="StackItemContent"
						border-color="#5C5C5C"
						border-radius="10px"
						border-width="1px"
						border-style="solid"
						flex-direction="column"
						padding="40px 40px 40px 40px"
					/>
					{"        "}
					<Box display="flex">
						<Image
							loading="lazy"
							width="64px"
							height="64px"
							src="https://ukit.top/quarkly/3/user-pic-Francisco-Lane.webp"
							margin="0px 23px 0px 0px"
						/>
						<Box display="flex" flex-direction="column" justify-content="center">
							<Text font="500 16px/24px --fontFamily-googleInter" color="#02E4C0" margin="0px 0px 0px 0px">
								Francisco Lane
							</Text>
							<Text font="500 16px/24px --fontFamily-googleInter" color="#ffffff" margin="0px 0px 0px 0px">
								Coder
							</Text>
						</Box>
					</Box>
					<Text
						font="normal 300 16px/24px --fontFamily-googleInter"
						margin="30px 0px 0px 0px"
						display="inline-block"
						color="#ffffff"
						width="90%"
					>
						You’re just awesome! The prices are reasonable, and the service is just great. Thank you so much! Highly recommend!
						<br />
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" border-radius="10px" sm-width="100%">
					<Override
						slot="StackItemContent"
						border-color="#5C5C5C"
						border-radius="10px"
						border-width="1px"
						border-style="solid"
						flex-direction="column"
						padding="40px 40px 40px 40px"
					/>
					{"        "}
					<Box display="flex">
						<Image
							loading="lazy"
							width="64px"
							height="64px"
							src="https://ukit.top/quarkly/3/user-pic-Ralph-Fisher.webp"
							margin="0px 23px 0px 0px"
						/>
						<Box display="flex" flex-direction="column" justify-content="center">
							<Text font="500 16px/24px --fontFamily-googleInter" color="#02E4C0" margin="0px 0px 0px 0px">
								Ralph Fisher
							</Text>
							<Text font="500 16px/24px --fontFamily-googleInter" color="#ffffff" margin="0px 0px 0px 0px">
								Coder
							</Text>
						</Box>
					</Box>
					<Text
						font="normal 300 16px/24px --fontFamily-googleInter"
						margin="30px 0px 0px 0px"
						display="inline-block"
						color="#ffffff"
						width="90%"
					>
						A friend of mine advised you to me, and I definitely liked working with you. It was a good experience. Thanks a lot!
						<br />
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" border-radius="10px" sm-width="100%">
					<Override
						slot="StackItemContent"
						border-color="#5C5C5C"
						border-radius="10px"
						border-width="1px"
						border-style="solid"
						flex-direction="column"
						padding="40px 40px 40px 40px"
					/>
					{"        "}
					<Box display="flex">
						<Image
							loading="lazy"
							width="64px"
							height="64px"
							src="https://ukit.top/quarkly/3/user-pic-Jorge-Murphy.webp"
							margin="0px 23px 0px 0px"
						/>
						<Box display="flex" flex-direction="column" justify-content="center">
							<Text font="500 16px/24px --fontFamily-googleInter" color="#02E4C0" margin="0px 0px 0px 0px">
								Francisco Lane
							</Text>
							<Text font="500 16px/24px --fontFamily-googleInter" color="#ffffff" margin="0px 0px 0px 0px">
								Designer
							</Text>
						</Box>
					</Box>
					<Text
						font="normal 300 16px/24px --fontFamily-googleInter"
						margin="30px 0px 0px 0px"
						display="inline-block"
						color="#ffffff"
						width="90%"
					>
						You did an amazing job and I wholeheartedly recommend you to everyone I know. You are the best!
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#181818" padding="80px 0 180px 0" lg-padding="80px 0 130px 0" sm-padding="30px 0 30px 0">
			<Override slot="SectionContent" sm-align-items="center" />
			<Stack gap="--cmp-stack-gap-small" width="100%">
				{"    "}
				<StackItem
					width="52%"
					display="flex"
					padding="0px"
					margin="0px -10px 0px 0px"
					lg-width="100%"
					lg-margin="0px 0px -10px 0px"
					lg-padding="0px 0px 0px 0px"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						background="#343434"
						padding="78px 0px 0px 74px"
						border-radius="20px 0px 0px 20px"
						lg-border-radius="20px 20px 0px 0px"
						lg-width="100%"
						lg-margin="0px 8px 0px 7px"
						lg-align-items="center"
						lg-padding="77px 0px 0px 0px"
					/>
					{"        "}
					<Text
						font="normal 300 52px/62px --fontFamily-googleInter"
						margin="0px 0px 37px 0px"
						display="inline-block"
						color="#ffffff"
						sm-text-align="center"
						sm-font="normal 300 36px/62px --fontFamily-googleInter"
					>
						OpenType features{" "}
						<br />
						and Variable fonts
					</Text>
					<Button
						background="#4452FE"
						font="normal 300 17px/25px --fontFamily-googleInter"
						letter-spacing="0.2px"
						padding="13px 34px 14px 34px"
						hover-transform="translateY(-10px)"
						transition="all 1s ease 0s"
						margin="0px 0px 30px 0px"
						box-shadow="0px 4px 31px rgba(0, 0, 0, 0.15)"
						width="235px"
						lg-margin="0px 0px 77px 0px"
					>
						Try For Free
					</Button>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem
					width="45%"
					display="flex"
					padding="0px"
					margin="0px 0px 0px 0px"
					lg-width="100%"
				>
					{"        "}
					<Image
						loading="lazy"
						width="100%"
						src="https://ukit.top/quarkly/3/cta-image.webp"
						height="370px"
						object-fit="cover"
						object-position="0%  0%"
						margin="0px 0px 0px -10px"
						border-radius="0px 20px 20px 0px"
						lg-margin="0px 0px 0px 0px"
						lg-border-radius="0px 0px 20px 20px"
					/>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section padding="0px 0 0px 0">
			<Override slot="SectionContent" width="100%" max-width="none" position="relative" />
			<Box
				width="100%"
				position="absolute"
				height="100%"
				background="#02E4C0"
				z-index="2"
				opacity="0.5"
			/>
			<GoogleMap query="qaraganda" />
		</Section>
		<Section background="#181818" padding="207px 0 107px 0" lg-padding="80px 0 80px 0">
			<Stack margin="0px -16px 0px 0px">
				{"    "}
				<StackItem width="20%" display="flex" lg-width="33.33%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Text
						font="normal 500 20px/30px --fontFamily-googleInter"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="#ffffff"
						letter-spacing="0.1px"
					>
						Product
					</Text>
					<Text
						font="normal 300 16px/24px --fontFamily-googleInter"
						margin="0px 0px 19px 0px"
						display="inline-block"
						color="#ffffff"
						letter-spacing="0.2px"
						opacity="0.8"
						hover-opacity="1"
					>
						Overview
					</Text>
					<Text
						font="normal 300 16px/24px --fontFamily-googleInter"
						margin="0px 0px 19px 0px"
						display="inline-block"
						color="#ffffff"
						letter-spacing="0.2px"
						opacity="0.8"
						hover-opacity="1"
					>
						Features
					</Text>
					<Text
						font="normal 300 16px/24px --fontFamily-googleInter"
						margin="0px 0px 19px 0px"
						display="inline-block"
						color="#ffffff"
						letter-spacing="0.2px"
						opacity="0.8"
						hover-opacity="1"
					>
						Roadmap
					</Text>
					<Text
						font="normal 300 16px/24px --fontFamily-googleInter"
						margin="0px 0px 19px 0px"
						display="inline-block"
						color="#ffffff"
						letter-spacing="0.2px"
						opacity="0.8"
						hover-opacity="1"
					>
						Pricing
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="20%" display="flex" lg-width="33.33%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Text
						font="normal 500 20px/30px --fontFamily-googleInter"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="#ffffff"
						letter-spacing="0.1px"
					>
						About
					</Text>
					<Text
						font="normal 300 16px/24px --fontFamily-googleInter"
						margin="0px 0px 19px 0px"
						display="inline-block"
						color="#ffffff"
						letter-spacing="0.2px"
						opacity="0.8"
						hover-opacity="1"
					>
						Overview
					</Text>
					<Text
						font="normal 300 16px/24px --fontFamily-googleInter"
						margin="0px 0px 19px 0px"
						display="inline-block"
						color="#ffffff"
						letter-spacing="0.2px"
						opacity="0.8"
						hover-opacity="1"
					>
						Team
					</Text>
					<Text
						font="normal 300 16px/24px --fontFamily-googleInter"
						margin="0px 0px 19px 0px"
						display="inline-block"
						color="#ffffff"
						letter-spacing="0.2px"
						opacity="0.8"
						hover-opacity="1"
					>
						Vacancy Jobs
					</Text>
					<Text
						font="normal 300 16px/24px --fontFamily-googleInter"
						margin="0px 0px 19px 0px"
						display="inline-block"
						color="#ffffff"
						letter-spacing="0.2px"
						opacity="0.8"
					>
						Awards
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="20%" display="flex" lg-width="33.33%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Text
						font="normal 500 20px/30px --fontFamily-googleInter"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="#ffffff"
						letter-spacing="0.1px"
					>
						Contact
					</Text>
					<Text
						font="normal 300 16px/24px --fontFamily-googleInter"
						margin="0px 0px 19px 0px"
						display="inline-block"
						color="#ffffff"
						letter-spacing="0.2px"
						opacity="0.8"
						hover-opacity="1"
					>
						Head Office
					</Text>
					<Text
						font="normal 300 16px/24px --fontFamily-googleInter"
						margin="0px 0px 19px 0px"
						display="inline-block"
						color="#ffffff"
						letter-spacing="0.2px"
						opacity="0.8"
						hover-opacity="1"
					>
						Subsidiaries
					</Text>
					<Text
						font="normal 300 16px/24px --fontFamily-googleInter"
						margin="0px 0px 19px 0px"
						display="inline-block"
						color="#ffffff"
						letter-spacing="0.2px"
						opacity="0.8"
						hover-opacity="1"
					>
						Support
					</Text>
					<Text
						font="normal 300 16px/24px --fontFamily-googleInter"
						margin="0px 0px 19px 0px"
						display="inline-block"
						color="#ffffff"
						letter-spacing="0.2px"
						opacity="0.8"
					>
						Feedback
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="40%" display="flex" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Box display="flex" align-items="center" margin="7px 0px 0px 0px">
						<Image loading="lazy" width="22px" height="28px" src="https://ukit.top/quarkly/3/map.webp" />
						<Text
							font="normal 300 16px/24px --fontFamily-googleInter"
							margin="0px 0px 0px 22px"
							display="inline-block"
							color="#ffffff"
							letter-spacing="0.2px"
							opacity="1"
							hover-opacity="1"
						>
							65806 Briarwood Road San Francisco CA{" "}
						</Text>
					</Box>
					<Box display="flex" align-items="center" margin="36px 0px 37px 0px">
						<Image loading="lazy" width="22px" height="28px" src="https://ukit.top/quarkly/3/tel.webp" />
						<Text
							font="normal 300 16px/24px --fontFamily-googleInter"
							margin="0px 0px 0px 22px"
							display="inline-block"
							color="#ffffff"
							letter-spacing="0.2px"
							opacity="1"
							hover-opacity="1"
						>
							<Link href="#" text-decoration-line="initial" color="#ffffff">
								417-865-1442
							</Link>
						</Text>
					</Box>
					<SocialMedia
						facebook="https://www.facebook.com/quarklyapp/"
						twitter="https://twitter.com/quarklyapp"
						youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
						vkontakte="https://vk.com/quarklyapp"
						telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
						text-align="left"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Override
							slot="link"
							background="rgba(237, 242, 246, 0)"
							color="#ffffff"
							order="1"
							text-align="left"
							text-decoration-line="initial"
						/>
						<Override slot="link-twitter" order="0" />
						<Override slot="link-vkontakte" display="none" />
						<Override slot="link-telegram" display="none" />
					</SocialMedia>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
	</Theme>;
});