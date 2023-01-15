import React, {Fragment, useState} from "react";
import NoImages from "./NoImage";
import Image from "./Image";
import getImageRequest from "../../api/requests/getImageRequest";

interface RenderImageProps {
    query: string
}

const RenderImage:React.FC<RenderImageProps> = (props) => {
    const [url, setUrl] = useState('');
    const [title, setTitle] = useState('');
    const [isRequestDone, setRequestDone] = useState(false);
    const  getImage = async (query: string) => {
        const results = await getImageRequest(query);

        let farm = results[0].farm;
        let server = results[0].server;
        let id = results[0].id;
        let secret = results[0].secret;
        let title = results[0].title;
        let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;

        setUrl(url);
        setTitle(title);
        setRequestDone(true);
        };


    if(!isRequestDone)
        getImage(props.query)

    return (
      <Fragment>
          <Image title={title} url={url} />
      </Fragment>
    );

};

export default RenderImage;