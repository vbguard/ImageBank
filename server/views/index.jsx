const React = require('react');
const { Helmet } = require('react-helmet');

const HelloMessage = ({ images }) => 
  <>
    <Helmet>
      <title>Image Bank</title>
      <meta name="description" content="Simple image bank nodejs, ssr, react" />
    </Helmet>
    <form action="/api/v1/images" method="post" enctype="multipart/form-data">
      <input type="file" name="image" />
      <button name="search-button" type="submit" class="search-button">
        Search
      </button>
    </form>
    <form class="search-form" id="search-form">
      <input
        type="text"
        name="q"
        autocomplete="off"
        placeholder="Search images..."
        id="search"
      />
      <button name="search-button" type="submit" class="search-button">
        Search
      </button>
    </form>

    <ul class="gallery">
      {images.map(image => (
        <li key={image}>
          <img src={image} alt="Some many images" />
        </li>
      ))}
    </ul>

    <button
      type="button"
      data-action="load-more"
      class="load-more"
      style={{
        padding: '0.5rem',
        width: '75px',
        transition: '0.2s',
        background: '#455a64',
        color: 'white',
        fontSize: '13px',
        height: '100%'
      }}
    >
      Load more
    </button>
  </>
;
module.exports = HelloMessage;
