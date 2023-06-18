import { Html, Image, Text } from "@react-three/drei";
import { TextureLoader } from "three";
import { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await axios.get("https://rotskerr.s-host.net/api/projects", { rejectUnauthorized: false });
        const project = response.data;
        const texture = new TextureLoader().load(project.path);
        project.texture = texture;
        setProjectData(project);
      } catch (error) {
        console.error("Error fetching project data:", error);
        // Додайте власну обробку помилки тут, наприклад, встановлення стану для відображення повідомлення про помилку
      }
    };
  
    fetchProjectData();
  }, []);
  
  

  return (
    <mesh position={[20, 0.2, 2]} scale={3} rotation={[0, Math.PI / -3, 0]}>
      <Text>SOON(</Text>
    </mesh>
  );
};

export default Projects;
