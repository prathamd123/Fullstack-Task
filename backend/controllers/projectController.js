const Project = require('../models/Project');

exports.getProjects = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
};

exports.createProject = async (req, res) => {
  const { name, description } = req.body;
  let imagePath = '';
  if (req.files && req.files.image) {
    const img = req.files.image;
    imagePath = `uploads/${Date.now()}_${img.name}`;
    await img.mv(imagePath);
  }
  const newProject = new Project({ name, description, image: imagePath });
  await newProject.save();
  res.json(newProject);
};
