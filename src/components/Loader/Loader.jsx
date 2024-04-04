import { CircleLoader } from "react-awesome-loaders";
export const Loader = () => {
return (
    <>
        <CircleLoader
            meshColor={"#ffffff"}
            lightColor={"#ffffff"}
            duration={1.5}
            desktopSize={"90px"}
            mobileSize={"64px"}
        />
    </>
);
};