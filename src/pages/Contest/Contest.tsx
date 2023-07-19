import './Contest.css';

import { Box, Container, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

// Images
import TITLE from '../../assets/title.svg';
import { ReactComponent as CHERRIES } from '../../assets/cherries.svg';
import heroImage from '../../assets/hero_riff.jpg';

export const Contest = () => {
  //todo: move the css to styles.css
  function HeroCenter({
    //decorative = '',
    title = 'Your Chance to Win a VIP Rifflandia Experience',
    subtitle = 'Make us laugh, bring us to tears, but most importantly be SEXY to win the ultimate Rifflandia party package for you and four friends!!',
  }: {
    //decorative?: String;
    title?: String;
    subtitle?: String;
  }) {
    return (
      <Box
        className="hero-center"
        sx={{
          my: 0,
          backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
        }}
      >
        {/* <Box
          sx={{
            color: "primary.500",
            fontWeight: 600,
            fontSize: "sm",
            textTransform: "uppercase",
            letterSpacing: 0.5,
          }}
        >
          {decorative}
        </Box> */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '4rem', sm: '4rem', md: '6rem' },
            fontWeight: 800,
            marginTop: { xs: '30%', md: '10%' },
            fontFamily: 'ArtusiExtraBold',
            color: 'white',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: '1.5rem', md: '2rem' },
            marginTop: { xs: '48px', md: '12px' },
            color: 'white',
            maxWidth: { xs: '90%', md: '50%' },
            fontFamily: 'ArtusiExtraBold',
          }}
        >
          {subtitle}
        </Typography>
      </Box>
    );
  }

  function Title() {
    return (
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}
      >
        <Box
          sx={{
            borderRadius: '10px',
            width: '300px',
            margin: '8px',
          }}
        >
          <img src={TITLE} alt="Rifflandia Title" />
          <Box sx={{ m: 1 }} />
          <Grid container rowSpacing={0}>
            <Grid item xs={2}>
              <Box
                sx={{
                  width: '45px',
                }}
              >
                <CHERRIES />
              </Box>
            </Grid>
            <Grid item xs={4}>
              {/* Note: I didn't add the dates (7-9th) because I just stole a free font file and cuz it's free, it won't show
              numbers lol  */}
              <h2 className="boldTitle"> Electric Avenue </h2>
              <h4 className="boldTitle"> September </h4>
            </Grid>
            <Grid item xs={2}>
              <Box
                sx={{
                  width: '45px',
                }}
              >
                <CHERRIES />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <h2 className="boldTitle"> The Park</h2>
              <h4 className="boldTitle"> September </h4>
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
  }

  return (
    <>
      {/* <div className="sidebar sidebar-svg-park"></div>
    <div className="sidebar sidebar-svg-electric"></div> */}
      <HeroCenter />
      <Box
        className="riff-background"
        sx={{
          textAlign: 'center',
          paddingBottom: '24px',
          backgroundColor: '#f6edb5',
        }}
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            marginTop: '-150px',
            zIndex: 2000,
          }}
        >
          <Box
            sx={{
              width: '200px',
            }}
          >
            <CHERRIES />
          </Box>
        </Container>

        {/* main content box */}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ maxWidth: '900px' }}>
            <Title />
          </Box>
        </Box>
        {/* end main content display box */}
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#f6edb5',
          paddingTop: '24px',
          paddingBottom: '120px',
        }}
      >
        <iframe src="https://form.jotform.com/231966142402047" className="jotform-riff" />
      </Box>
    </>
  );
};
