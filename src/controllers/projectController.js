import axios from "axios";
const postController = {
  fetchProjects: async (req, res) => {
    try {
      const projects = await axios.get(
        "https://api.github.com/users/emoueitchaien/repos?per_page=9"
      );

      const projectDetails = projects.data.map((project) => ({
        id: project.id,
        name: project.name,
        html_url: project.html_url,
        description: project.description,
      }));

      return res.json(projectDetails);
    } catch (err) {
      res.status(400).json({ "Errorrr:": err });
    }
  },
};

export default postController;
