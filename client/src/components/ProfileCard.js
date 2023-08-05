import image from "../static/images/profileimg.png";

const ProfileCard = (props) => {
  return (
    <>
      <div
        className={`ls:w-[209px] ls:h-[54px] sm:w-[180px] sm:h-[60px] bg-${props.color} rounded-[6px] flex items-center justify-center space-x-3`}
      >
        <img
          src={image}
          className={`rounded-[2px] border-[1px] border-${props.textcolor} w-[36px] `}
        />

        <h1
          className={`text-[18px] text-${props.textcolor} font-juneauRegular1`}
        >
          Kartik Kumar
        </h1>
      </div>
    </>
  );
};

export default ProfileCard;
