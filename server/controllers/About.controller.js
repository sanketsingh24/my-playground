import About from '../models/About';

export function getAbout(req, res) {
  About.find().sort('-sequence').exec((err,Content)=>{
    if(err){
      res.status(500).send(err);
    }
    res.json({Content})
  })
}
