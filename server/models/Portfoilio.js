const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: String,
    description: String,
    techStack: [String],
    link: String,
});

const ArticleSchema = new mongoose.Schema({
    title: String,
    content: String,
    tags: [String],
});

const SocialSchema = new mongoose.Schema({
    name: String,
    url: String,
});

const PortfolioSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: String,
    description: String,
    contactEmail: String,
    socialMedia: [SocialSchema],
    projects: [ProjectSchema],
    articles: [ArticleSchema],
    experience: [{
        jobTitle: String,
        company: String,
        duration: String,
        description: String,
    }],
    skills: [String],
    testimonials: [{
        name: String,
        message: String,
    }],
    education: [{
        degree: String,
        institution: String,
        year: String,
    }]
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);
