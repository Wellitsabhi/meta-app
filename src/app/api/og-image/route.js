import nodeHtmlToImage from 'node-html-to-image';

export default async function handler(req, res) {
  const { username } = req.query;

  const image = await nodeHtmlToImage({
    html: `<html>
      <body>
        <h1>${username}</h1>
        <p>This is an auto-generated image for ${username}'s profile</p>
      </body>
    </html>`,
  });

  res.setHeader('Content-Type', 'image/png');
  res.send(image);
}
