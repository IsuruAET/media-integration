import {
  Box,
  CardActionArea,
  CardMedia,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import "./index.css";

const Carousel = () => {
  const onClickHandler = () => {
    const targetOrigin = "http://localhost:8000";
    window.parent.postMessage("CLICK_CAROUSEL_ITEM", targetOrigin);
  };

  const data = [
    {
      id: 1,
      title: "Chennai Super Kings",
      desc: "Chennai Super Kings is an Indian Premier League franchise cricket team based in Chennai, Tamil Nadu, India. Founded in 2008, the team plays its home matches at the M. A. Chidambaram Stadium in Chennai.",
      img: "http://t3.gstatic.com/images?q=tbn:ANd9GcQOkctUdtbKKCpJOwSZ0-wQGW9I2JfM7RYmJ5pv3RqyzH65mQQt",
    },
    {
      id: 2,
      title: "Royal Challengers Bangalore",
      desc: "Royal Challengers Bangalore are a franchise cricket team based in Bengaluru, Karnataka, that plays in the Indian Premier League. It was founded in 2008 by United Spirits and named after the company's liquor brand Royal Challenge.",
      img: "https://yt3.googleusercontent.com/szR92lL8-5jqaQ6m1Lmh2EE7uRuv1XC_FWnEgX_eFx07r2A_GlXbMvubEO-sbALvTsfCsBzegA=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 3,
      title: "Mumbai Indians",
      desc: "Mumbai Indians are a franchise cricket team based in Mumbai, Maharashtra, that competes in the Indian Premier League and is the most successful team of the tournament with 5 titles.",
      img: "http://t2.gstatic.com/images?q=tbn:ANd9GcTGOQyXb0bp1ikIvWtQNRVLbsoz05OpO-w0jjuuIewCZckSLJ9C",
    },
    {
      id: 4,
      title: "Kolkata Knight Riders",
      desc: "Kolkata Knight Riders are a franchise cricket team representing the city of Kolkata in the Indian Premier League. The franchise is owned by Bollywood actor Shah Rukh Khan, actress Juhi Chawla and her spouse Jay Mehta. The Knight Riders play at the Eden Gardens stadium.",
      img: "https://whoowner.b-cdn.net/wp-content/uploads/2018/02/Owner-of-Kolkata-Knight-Riders-Team-India-KKR-Wiki-Logo.jpg",
    },
    {
      id: 5,
      title: "Sunrisers Hyderabad",
      desc: "Sunrisers Hyderabad are a franchise cricket team based in Hyderabad, Telangana, India, that plays in the Indian Premier League. The franchise is owned by Kalanithi Maran of the SUN Group and was founded in 2012 after the Hyderabad-based Deccan Chargers were terminated by the IPL.",
      img: "http://t1.gstatic.com/images?q=tbn:ANd9GcQcShSF8dD5DuwjceCVbmoLq1z9lOZ4DO-Rf3GLin-7DTqo-e2G",
    },
    {
      id: 6,
      title: "Rajasthan Royals",
      desc: "Rajasthan Royals are a franchise cricket team based in Jaipur, Rajasthan, that plays in the Indian Premier League. Founded in 2008 as one of the initial eight IPL franchises, the team is based at the Sawai Mansingh Stadium in Jaipur.",
      img: "http://t2.gstatic.com/images?q=tbn:ANd9GcQYtQSG7Ry_I9YX81lxHSvp8KBbu0_FEZ5pAIHOnwnytYPynrUc",
    },
    {
      id: 7,
      title: "Gujarat Titans",
      desc: "Gujarat Titans is a franchise cricket team based in Ahmedabad, Gujarat, India. The Titans compete in the Indian Premier League. Founded in 2021, Gujarat Titans' home ground is Narendra Modi Stadium in Motera. The franchise is owned by CVC Capital Partners.",
      img: "https://imgk.timesnownews.com/story/Gujarat_Titans_logo.png?tr=w-600,h-450,fo-auto",
    },
    {
      id: 8,
      title: "Punjab Kings",
      desc: "Punjab Kings is a franchise cricket team based in Mohali, Punjab, that plays in the Indian Premier League. Established in 2008 as the Kings XI Punjab, the franchise is jointly owned by Mohit Burman, Ness Wadia, Preity Zinta and Karan Paul. The team plays its home matches at the PCA Stadium, Mohali.",
      img: "https://1000logos.net/wp-content/uploads/2022/09/Punjab-Kings-Logo.png",
    },
    {
      id: 9,
      title: "Delhi Capitals",
      desc: "Delhi Capitals are a franchise cricket team based in Delhi that plays in the Indian Premier League. The franchise is jointly owned by the GMR Group and the JSW Group. The team's home ground is Arun Jaitley Stadium, located in New Delhi. The team is coached by Ricky Ponting.",
      img: "https://thenewsmill.com/wp-content/uploads/2023/02/womens-premier-league-jonathan-batty-to-be-delhi-capitals-head-coach-jpg.webp",
    },
    {
      id: 10,
      title: "Lucknow Super Giants",
      desc: "Lucknow Super Giants is a franchise cricket team based in Lucknow, Uttar Pradesh. They play in the Indian Premier League. The Lucknow franchise formed in 2021. Sanjeev Goenka is its principal owner. The team is captained by KL Rahul and coached by Andy Flower. The team mentor is Gautam Gambhir.",
      img: "https://imgk.timesnownews.com/story/Lucknow_Super_Giants_logo.png?tr=w-600,h-450,fo-auto",
    },
  ];
  return (
    <Container>
      <div className="carousel">
        <div className="nav nav-left">
          <div className="ion-chevron-left carousel-arrow-icon-left"></div>
        </div>

        <div className="carousel-content">
          {data.length > 0 &&
            data?.map((item) => (
              <Box key={item.id} className="slide" onClick={onClickHandler}>
                <CardActionArea sx={{ height: "320px" }}>
                  <CardMedia
                    component="img"
                    image={item.img}
                    alt="test image"
                    sx={{
                      width: "140px",
                      height: "140px",
                      margin: "auto",
                      paddingTop: "40px",
                    }}
                  />
                  <CardContent sx={{ height: "200px", marginY: "50px" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.desc}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Box>
            ))}
        </div>

        <div className="nav nav-right">
          <div className="ion-chevron-right carousel-arrow-icon-right"></div>
        </div>
      </div>
    </Container>
  );
};

export default Carousel;
