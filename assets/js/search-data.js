// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "elegant design with computational tools, built on a foundation of traditional design expertise",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "a collection of my public repositories - numerical modeling from the academic to the instructional",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-i-defended-my-phd-dissertation-stretching-the-boundary-computational-design-and-fabrication-of-soft-systems-at-the-university-of-colorado-in-boulder",
          title: 'I defended my PhD Dissertation Stretching the Boundary: Computational Design and Fabrication of...',
          description: "",
          section: "News",},{id: "news-my-research-on-high-performance-metamaterials-for-impact-absorbsion-was-covered-by-yahoo-sports",
          title: 'My research on high-performance metamaterials for impact absorbsion was covered by Yahoo Sports!...',
          description: "",
          section: "News",},{id: "news-i-joined-the-max-planck-institute-for-intelligent-systems-in-stuttgart-germany-as-a-postdoctoral-researcher-in-the-robotic-materials-department",
          title: 'I joined the Max Planck Institute for Intelligent Systems in Stuttgart, Germany as...',
          description: "",
          section: "News",},{id: "news-i-was-awarded-the-humboldt-postdoctoral-research-fellowship-to-support-2-years-of-research-into-soft-electrostatic-transducers-for-wave-energy-harvesting",
          title: 'I was awarded the Humboldt Postdoctoral Research Fellowship to support 2 years of...',
          description: "",
          section: "News",},{id: "news-i-attended-the-13th-humboldt-research-prize-forum-in-bonn-and-discussed-the-implications-of-ai-on-research-and-wider-society",
          title: 'I attended the 13th Humboldt Research Prize Forum in Bonn and discussed the...',
          description: "",
          section: "News",},{id: "news-our-research-into-the-role-of-functional-gradients-in-elephant-whiskers-has-been-published-in-science",
          title: 'Our research into the role of functional gradients in elephant whiskers has been...',
          description: "",
          section: "News",},{id: "news-our-research-on-elephant-whisker-mechanics-is-featured-in-the-new-york-times-scientific-american-popular-science-and-more",
          title: 'Our research on elephant whisker mechanics is featured in The New York Times,...',
          description: "",
          section: "News",},{id: "news-i-attended-the-14th-international-conference-on-soft-transducers-and-electromechanically-active-polymers-in-neuchatel-switzerland-to-discuss-the-cutting-edge-of-electroactive-polymers-for-energy-harvesting",
          title: 'I attended the 14th International Conference on Soft Transducers and Electromechanically Active Polymers...',
          description: "",
          section: "News",},{id: "news-publication-alert-we-created-mechanically-plausable-analogues-for-human-bone-suitable-for-use-in-surgical-training-using-polyjet-3d-printing-technology-and-ntop-for-geometry-generation-results-published-in-cureus",
          title: 'Publication alert! We created mechanically plausable analogues for human bone suitable for use...',
          description: "",
          section: "News",},{id: "news-publication-alert-our-team-at-the-max-planck-institute-has-published-a-groundbreaking-analytical-and-experimental-study-of-soft-electrohydraulic-generators-with-applications-in-portable-electronics-and-ocean-wave-energy-harvesting-in-advanced-science",
          title: 'Publication alert! Our team at the Max Planck Institute has published a groundbreaking...',
          description: "",
          section: "News",},{id: "projects-the-perfect-dose",
          title: 'the perfect dose',
          description: "beginnings in mechanical design",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_bolus/";
            },},{id: "projects-energy-from-motion",
          title: 'energy from motion',
          description: "compliant electrostatic generators for ocean wave energy",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_hasel_generators/";
            },},{id: "projects-bouncing-back",
          title: 'bouncing back',
          description: "metamaterials for impact absorbtion",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_impact/";
            },},{id: "projects-leveraging-compliance",
          title: 'leveraging compliance',
          description: "a new design paradigm for pneumatic soft robots",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_soroforge/";
            },},{id: "projects-synthetic-flesh",
          title: 'synthetic flesh',
          description: "inverse design of biological tissue mimics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_synthetictissues/";
            },},{id: "projects-vibrotactile-sensing",
          title: 'vibrotactile sensing',
          description: "unravelling the hidden properties of whiskers",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_whiskers/";
            },},{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=5WBRnCEAAAAJ", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%73%6D%69%74%68@%69%73.%6D%70%67.%64%65", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/lawrence-smith-413a1232", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/LawSmith408", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
