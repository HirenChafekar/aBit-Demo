const SVGS = {
  wallet: () => (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <rect width="36" height="36" fill="url(#pattern0)" fill-opacity="0.32" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlink:href="#image0_341_55" transform="scale(0.0104167)" />
        </pattern>
        <image
          id="image0_341_55"
          width="96"
          height="96"
          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAADS0lEQVR4nO2dz29MURTHP0NTDZGQqpBGtYsSbCSiqZaICGLFshphKf4JGxbCrluxQCQSaawJKwtLSbEpRUJTCSoa1S6asJh5jbwYM9P7zjn3XeeTfDdN7j3nfM/c1/fjvhlwHMdxHMdxHMdxHMdxHMdxHOcvbAauABPAfE0TwGWgyzCv/4IjwBfgVx19Bg6bZZc4A8Ac9c3PNAfsN8oxWdqB1zQ2P9MU0GGSaYL0AGM0b36mMWC7Qb5J0A1cAiZp3fi8JmtzdatWUFL6gLvAEuHG57VUm7tXrZoS0QFcBxYp3vi8FoFr+P+IZfqB58gbn9dLYI9CfVFzHPiOvvmZ5oAT4lVGykHgB3bm/3lIOilca3QMEYf5meapfiD+C7qAaexNz+sTsFWw7mi4j73Z9TQuWHcUHMXe5EY6JlZ9BDzF3uBGeiZWvTED2JvbrNTupq7SCgScVYwVSplybZr32H+ym9U7IQ/M6MPe1FbVJ+JEDq1D0D6lOEWyVyOIVgP6leIUyU6NIFoN6FGKUyQqOWs1YJNSnCLp1AjiDahPUg1QKaZgkmqAr4A6VDSCUH3osUYpVlH8BNZJB9FYARson/kAa4H10kE0GlDGU9CMbdIBNBogXoQgSTSgzCtAfGujRgNULumFEM9dowG7FGJIIZ67N+Df7LZOIJQt2N/XD5XoVhXpFXBIeH4NhiQnl25ACrvNhq0TWCkV4C32h5BQvUHvlk2hDGNvXlEaLNibZSQPQecE59bmvHUCrdKLztsuWlqgRFf0bcBj7E0rWo9qtUVNJ/AAe7OkNE7ET/eGgRnsTZLWDBGemvYCs9ibo6VZInoJvAI8xN4UbT0hkuuDUezNsNJIAf4FUQFeYW+ElV6EWxjGIPYmWCvoZY7QK+FTgeNT4HTI4NAGHAgcnwJB94lCG1DGbedFsyNkcOhp1AL+rSMLVDdxrYjQFTAbOD4FgjwIbcCdwPEpYOpBO3CVOL/7QVrTtdrbg110HMdx8mwEvhJ+rP5GxA9RYuci4Q24oJ51Ytxm5ebfMsg3OdqAm7Ru/g1gtUG+yTIKfKSx8R+AM0Y5Jk8HVXPvUd32mP2Aw1TtbyOU84VAx3Ecx3Ecx3Ecx3Ecx3Ecx5HkNxU2XUv2ahFIAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  ),
};

const SVGComponent = ({ src, color }) => {
  const svgToRender = SVGS[src];
  if (!svgToRender) {
    return <div></div>;
  }

  return <>{svgToRender(color || "#000000")}</>;
};

export default SVGComponent;
