import React, { useState, useEffect } from "react";
import "../css/Gallery.css";

const imagesPlusData = [
  {
    src: require("../Images/0C1E46AD-6FC4-44A0-B0B9-262E8252D184.jpg"),
    year: 2022,
    dog: true,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/0030AB9A-7B21-4836-B202-FC138AC8236E.jpg"),
    year: 2020,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/20230318_185713_Original.jpg"),
    year: 2023,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/20240829_194448.jpg"),
    year: 2024,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/20240928_123407.jpg"),
    year: 2024,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/20241005_191449.jpg"),
    year: 2024,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/27CD62FD-25D8-4692-9A46-34E9C81450ED.jpg"),
    year: 2022,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/41AF2D6B-9EEB-435A-A72C-DAA19071627B.jpg"),
    year: 2024,
    dog: false,
    travel: true,
    wedding: false,
  },
  {
    src: require("../Images/5B8A0341_Original.jpg"),
    year: 2024,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/5B8A0414_Original.jpg"),
    year: 2024,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/5B8A0454-2_Original.jpg"),
    year: 2024,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/5B8A0549_Original.jpg"),
    year: 2024,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/5B8A0590_Original.jpg"),
    year: 2024,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/5B8A0593_Original.jpg"),
    year: 2024,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/5B8A0622_Original.jpg"),
    year: 2024,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/5B8A0641_Original.jpg"),
    year: 2024,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/5B8A0654_Original.jpg"),
    year: 2024,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/5B8A0722_Original.jpg"),
    year: 2024,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/5B8A0735-Edit_Original.jpg"),
    year: 2024,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/5B8A0777_Original.jpg"),
    year: 2024,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/5B8A0797_Original.jpg"),
    year: 2024,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/5B8A0850_Original.jpg"),
    year: 2024,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/5B8A0888-Enhanced-NR_Original.jpg"),
    year: 2024,
    dog: true,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/773939CA-3A03-40AC-A72A-54336796B4B4.jpg"),
    year: 2022,
    dog: false,
    travel: true,
    wedding: false,
  },
  {
    src: require("../Images/A84CBDE7-6015-459E-A21D-4689B3C3DDB4.jpg"),
    year: 2021,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/D989878C-9439-4E2B-B73F-332963D306D1.jpg"),
    year: 2019,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/DSC_2716.jpg"),
    year: 2024,
    dog: false,
    travel: true,
    wedding: false,
  },
  {
    src: require("../Images/DSC_2746.jpg"),
    year: 2024,
    dog: false,
    travel: true,
    wedding: false,
  },
  {
    src: require("../Images/FB_IMG_1732476157503.jpg"),
    year: 2018,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/FB_IMG_1732476192127.jpg"),
    year: 2019,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/FB_IMG_1732476244559.jpg"),
    year: 2018,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/FB_IMG_1732476249812.jpg"),
    year: 2021,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/FB_IMG_1732479273842.jpg"),
    year: 2023,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/FE047D5D-9D35-40F8-B3A8-24D2556DCDA1.jpg"),
    year: 2022,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/imagejpeg_0.jpg"),
    year: 2024,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_0091.jpg"),
    year: 2018,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_0127.jpg"),
    year: 2018,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_0534-1.jpg"),
    year: 2021,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_0668.jpg"),
    year: 2017,
    dog: false,
    travel: true,
    wedding: false,
  },
  {
    src: require("../Images/IMG_0669.jpg"),
    year: 2017,
    dog: false,
    travel: true,
    wedding: false,
  },
  {
    src: require("../Images/IMG_0737.jpg"),
    year: 2023,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_0923.jpg"),
    year: 2019,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_0980.jpg"),
    year: 2018,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_0981.jpg"),
    year: 2018,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_1097.jpg"),
    year: 2017,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_1129.jpg"),
    year: 2021,
    dog: false,
    travel: true,
    wedding: false,
  },
  {
    src: require("../Images/IMG_1174.jpg"),
    year: 2021,
    dog: false,
    travel: true,
    wedding: false,
  },
  {
    src: require("../Images/IMG_1235 (1).jpg"),
    year: 2018,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_1262.jpg"),
    year: 2021,
    dog: false,
    travel: true,
    wedding: false,
  },
  {
    src: require("../Images/IMG_1275.jpg"),
    year: 2019,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_1283.jpg"),
    year: 2021,
    dog: false,
    travel: true,
    wedding: false,
  },
  {
    src: require("../Images/IMG_1291.jpg"),
    year: 2021,
    dog: false,
    travel: true,
    wedding: false,
  },
  {
    src: require("../Images/IMG_1326.jpg"),
    year: 2021,
    dog: false,
    travel: true,
    wedding: false,
  },
  {
    src: require("../Images/IMG_1329.jpg"),
    year: 2021,
    dog: false,
    travel: true,
    wedding: false,
  },
  {
    src: require("../Images/IMG_1359.jpg"),
    year: 2017,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_1384.jpg"),
    year: 2021,
    dog: false,
    travel: true,
    wedding: false,
  },
  {
    src: require("../Images/IMG_1393.jpg"),
    year: 2018,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_1587.jpg"),
    year: 2018,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_1601.jpg"),
    year: 2018,
    dog: false,
    travel: true,
    wedding: false,
  },
  {
    src: require("../Images/IMG_1966.jpg"),
    year: 2018,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_2310.jpg"),
    year: 2019,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_2518_Original.jpg"),
    year: 2022,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_2619.jpg"),
    year: 2021,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_2689.jpg"),
    year: 2021,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_2795.jpg"),
    year: 2022,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_2949.jpg"),
    year: 2023,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_3118.jpg"),
    year: 2023,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_3391.jpg"),
    year: 2019,
    dog: false,
    travel: true,
    wedding: false,
  },
  {
    src: require("../Images/IMG_3833.jpg"),
    year: 2019,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_3885.jpg"),
    year: 2022,
    dog: false,
    travel: true,
    wedding: false,
  },
  {
    src: require("../Images/IMG_4021.jpg"),
    year: 2023,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_4085.jpg"),
    year: 2023,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_4092.jpg"),
    year: 2022,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_4254.jpg"),
    year: 2022,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_4532.jpg"),
    year: 2022,
    dog: true,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_4533.jpg"),
    year: 2022,
    dog: true,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_4885.jpg"),
    year: 2024,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_4987.jpg"),
    year: 2024,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_5148.jpg"),
    year: 2019,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_5221.jpg"),
    year: 2022,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_5277.jpg"),
    year: 2022,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_5577.jpg"),
    year: 2024,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_5748.jpg"),
    year: 2019,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_5753.jpg"),
    year: 2023,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_5903.jpg"),
    year: 2019,
    dog: false,
    travel: true,
    wedding: false,
  },
  {
    src: require("../Images/IMG_6026.jpg"),
    year: 2023,
    dog: false,
    travel: true,
    wedding: false,
  },
  {
    src: require("../Images/IMG_6167.jpg"),
    year: 2024,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_6249.jpg"),
    year: 2023,
    dog: true,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_6497.jpg"),
    year: 2022,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_6529.jpg"),
    year: 2023,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_6536-2.jpg"),
    year: 2020,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_6537.jpg"),
    year: 2023,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_6602.jpg"),
    year: 2022,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_6641.jpg"),
    year: 2022,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_6674.jpg"),
    year: 2024,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_7028.jpg"),
    year: 2020,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_7390.jpg"),
    year: 2023,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_7438.jpg"),
    year: 2023,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_7478.jpg"),
    year: 2024,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_7729.jpg"),
    year: 2023,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_7960.jpg"),
    year: 2020,
    dog: true,
    travel: true,
    wedding: false,
  },
  {
    src: require("../Images/IMG_7966.jpg"),
    year: 2020,
    dog: true,
    travel: true,
    wedding: false,
  },
  {
    src: require("../Images/IMG_8246-2.jpg"),
    year: 2021,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_8430.jpg"),
    year: 2024,
    dog: false,
    travel: true,
    wedding: false,
  },
  {
    src: require("../Images/IMG_8448.jpg"),
    year: 2024,
    dog: false,
    travel: true,
    wedding: false,
  },
  {
    src: require("../Images/IMG_8469.jpg"),
    year: 2024,
    dog: false,
    travel: true,
    wedding: false,
  },
  {
    src: require("../Images/IMG_8495.jpg"),
    year: 2021,
    dog: true,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_8500.jpg"),
    year: 2024,
    dog: false,
    travel: true,
    wedding: false,
  },
  {
    src: require("../Images/IMG_8722.jpg"),
    year: 2020,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_8754.jpg"),
    year: 2020,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_8818.jpg"),
    year: 2024,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_8826.jpg"),
    year: 2020,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_8902.jpg"),
    year: 2020,
    dog: true,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_9129.jpg"),
    year: 2017,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_9232.jpg"),
    year: 2020,
    dog: false,
    travel: true,
    wedding: false,
  },
  {
    src: require("../Images/IMG_9281.jpg"),
    year: 2024,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_9471.jpg"),
    year: 2021,
    dog: true,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_9505.jpg"),
    year: 2021,
    dog: false,
    travel: true,
    wedding: false,
  },
  {
    src: require("../Images/IMG_9564.jpg"),
    year: 2024,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_9634.jpg"),
    year: 2024,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/IMG_9670.jpg"),
    year: 2024,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/NOR2101-HDR(1).jpg"),
    year: 2024,
    dog: false,
    travel: true,
    wedding: false,
  },
  {
    src: require("../Images/NOR2242-HDR(1).jpg"),
    year: 2024,
    dog: false,
    travel: true,
    wedding: false,
  },
  {
    src: require("../Images/NOR2308.jpg"),
    year: 2024,
    dog: false,
    travel: true,
    wedding: false,
  },
  {
    src: require("../Images/NOR2426.jpg"),
    year: 2024,
    dog: false,
    travel: true,
    wedding: false,
  },
  {
    src: require("../Images/NOR2510.jpg"),
    year: 2024,
    dog: false,
    travel: true,
    wedding: false,
  },
  {
    src: require("../Images/NOR2594.jpg"),
    year: 2024,
    dog: false,
    travel: true,
    wedding: false,
  },
  {
    src: require("../Images/NOR2758.jpg"),
    year: 2024,
    dog: false,
    travel: true,
    wedding: false,
  },
  {
    src: require("../Images/NOR2884.jpg"),
    year: 2024,
    dog: false,
    travel: true,
    wedding: false,
  },
  {
    src: require("../Images/Screenshot_20241124_141610_Instagram.jpg"),
    year: 2023,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/Screenshot_20241124_141646_Instagram.jpg"),
    year: 2023,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/Snapchat-1576937490.jpg"),
    year: 2024,
    dog: false,
    travel: false,
    wedding: false,
  },
  {
    src: require("../Images/0D4A0279.jpg"),
    year: 2025,
    dog: false,
    travel: false,
    wedding: true,
  },
  {
    src: require("../Images/5B8A7359.jpg"),
    year: 2025,
    dog: false,
    travel: false,
    wedding: true,
  },
  {
    src: require("../Images/5B8A8202.jpg"),
    year: 2025,
    dog: false,
    travel: false,
    wedding: true,
  },
  {
    src: require("../Images/BDS_7055.jpg"),
    year: 2025,
    dog: false,
    travel: false,
    wedding: true,
  },
  {
    src: require("../Images/DSC_0660.jpg"),
    year: 2025,
    dog: false,
    travel: false,
    wedding: true,
  },
  {
    src: require("../Images/DSC_0731.jpg"),
    year: 2025,
    dog: false,
    travel: false,
    wedding: true,
  },
  {
    src: require("../Images/DSC_0977.jpg"),
    year: 2025,
    dog: false,
    travel: false,
    wedding: true,
  },
  {
    src: require("../Images/DSC_9961.jpg"),
    year: 2025,
    dog: false,
    travel: false,
    wedding: true,
  },
];

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const splitIntoColumns = (images, numColumns) => {
  const columns = Array.from({ length: numColumns }, () => []);
  images.forEach((img, index) => {
    columns[index % numColumns].push(img);
  });
  return columns;
};

const Gallery = () => {
  const [loading, setLoading] = useState(true);
  const [filterYear, setFilterYear] = useState(null);
  const [filterDog, setFilterDog] = useState(null);
  const [filterTravel, setFilterTravel] = useState(null);
  const [filterWedding, setFilterWedding] = useState(null);
  const numColumns = 3;

  useEffect(() => {
    const imagePromises = imagesPlusData.map((img) => {
      const image = new Image();
      image.src = img.src;
      return new Promise((resolve) => {
        image.onload = resolve;
        image.onerror = resolve;
      });
    });

    Promise.all(imagePromises).then(() => setLoading(false));
  }, []);

  const handleFilterChange = (event) => {
    setFilterYear(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    if (event.target.id === "dogFilter") {
      setFilterDog(!filterDog);
    } else if (event.target.id === "travelFilter") {
      setFilterTravel(!filterTravel);
    } else if (event.target.id === "weddingFilter") {
      setFilterWedding(!filterWedding);
    }
  };

  const yearFilteredImages = filterYear
    ? imagesPlusData.filter((img) => img.year === parseInt(filterYear))
    : imagesPlusData;

  const dogFilteredImages = filterDog
    ? yearFilteredImages.filter((img) => img.dog === true)
    : yearFilteredImages;

  const travelFilteredImages = filterTravel
    ? dogFilteredImages.filter((img) => img.travel === true)
    : dogFilteredImages;

  const weddingFilteredImages = filterWedding
    ? travelFilteredImages.filter((img) => img.wedding === true)
    : travelFilteredImages;

  const shuffledImages = shuffleArray(weddingFilteredImages);
  const columns = splitIntoColumns(shuffledImages, numColumns);

  return (
    <>
      <header className="gallery-header">
        <h1>Welcome to our Photo Gallery</h1>
        <p>Enjoy this collection of memories from our 8 years together!</p>
      </header>

      <div className="filter-container">
        <label htmlFor="yearFilter">Filter by year: </label>
        <select id="yearFilter" onChange={handleFilterChange}>
          <option value="">All Years</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
        <br></br>
        <label htmlFor="dogFilter">If you're only here for dog photos!</label>
        <input
          type="checkbox"
          id="dogFilter"
          name="filter"
          value="dog"
          onChange={handleCheckboxChange}
        />
        <br></br>
        <label htmlFor="travelFilter">
          If you're only here for travel photos!
        </label>
        <input
          type="checkbox"
          id="travelFilter"
          name="filter"
          value="travel"
          onChange={handleCheckboxChange}
        />
        <br></br>
        <label htmlFor="weddingFilter">
          If you're only here for wedding photos!
        </label>
        <input
          type="checkbox"
          id="weddingFilter"
          name="filter"
          value="wedding"
          onChange={handleCheckboxChange}
        />
      </div>

      {loading ? (
        <div className="loading-spinner">
          <img src="/spinner.gif" alt="" />
        </div>
      ) : (
        <div className="gallery">
          {columns.map((columnImages, columnIndex) => (
            <div key={columnIndex} className="gallery-column">
              {columnImages.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt={`Gallery Image ${index + 1}`}
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Gallery;
