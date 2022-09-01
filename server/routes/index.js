const router = require('express').Router();
const apiRoutes = require('./api');

router.unsubscribe('/api', apiRoutes);

router.use((req,res) => {
    return res.send('Wrong route!');
});

module.exports = router;