import image1 from '../images/web.svg';
import image2 from '../images/mobile.svg';
import image3 from '../images/ecom.svg';
import image4 from '../images/data.svg';
import image5 from '../images/cyber.svg';
import image6 from '../images/cloud.svg';

type Props = {
  title: string;
  description: string;
};

const imageSources = [image1, image2, image3, image4, image5, image6];
let currentIndex = 0;

export const ProjectCard: React.FC<Props> = ({ title, description }) => {
  const imageSource = imageSources[currentIndex];
  currentIndex = (currentIndex + 1) % imageSources.length;

  return (
    <div className="project-card">
      <div className="image">
        <img 
          src={imageSource} 
          alt="Project Image" 
          className='image-project'
        />
      </div>
      <div className="content">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <div><a href="/" className="readmore">Read more</a></div>
      </div>
    </div>
  );
};
