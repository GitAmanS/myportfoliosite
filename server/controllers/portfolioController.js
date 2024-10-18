const Portfolio = require('../models/Portfolio');

exports.getPortfolio = async (req, res) => {
    try {
        const portfolio = await Portfolio.findOne({ userId: req.user.id });
        res.json(portfolio);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.updatePortfolio = async (req, res) => {
    const updates = req.body;
    try {
        let portfolio = await Portfolio.findOne({ userId: req.user.id });
        if (!portfolio) {
            portfolio = new Portfolio({ userId: req.user.id, ...updates });
        } else {
            portfolio = await Portfolio.findOneAndUpdate({ userId: req.user.id }, updates, { new: true });
        }
        await portfolio.save();
        res.json(portfolio);
    } catch (err) {
        res.status(500).send('Server error');
    }
};
