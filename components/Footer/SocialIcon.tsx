import Image from "next/image";

import VisuallyHidden from "../VisuallyHidden";

interface SocialIconProps {
  iconUrl: string;
  width?: number;
  height?: number;
  text: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({
  iconUrl,
  text,
  width = 36,
  height = 36,
}) => {
  return (
    <div>
      <Image src={iconUrl} width={width} height={height} alt={text} />
      <VisuallyHidden>{text}</VisuallyHidden>
    </div>
  );
};

export default SocialIcon;
