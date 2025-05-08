import { View, Text, Image } from "react-native";
import { styles } from "./post.styles";
import { IPostProps } from "./post.types";
import { avatars } from "../../../../assets/avatars/avatars";
import { DotsIcon, EyeIcon, LikeIcon } from "../icons";

export function Post(props: IPostProps) {
  const { avatar, username, headerImage, text, hashtags, images, likes, views } = props;

  return (
    <View style={styles.postContainer}>

      <View style={styles.postHeader}>
        <Image source={avatars[avatar]} style={styles.avatar} />
        <Text style={styles.username}>{username}</Text>
        <DotsIcon width={20} height={20} fill={'#81818D'} style={styles.dotsIcon}/>
      </View>


      <View style={styles.postBody}>
        <Text style={styles.text}>{text}</Text>
        {hashtags && <Text style={styles.hashtags}>{hashtags}</Text>}

        {images && (
          
            <View style={styles.imageGrid}>
              
              <View style={styles.row}>
                <Image source={{ uri: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*j5Ad6U0uv_rau7Nd" }} style={styles.imageHalf} />
                <Image source={{ uri: "https://godandman.com/wp-content/uploads/sites/10/2025/05/martin-baron-ZL4t9yucR_o-unsplash.jpg?resize=1280,853" }} style={styles.imageHalf} />
              </View>

              
              <View style={styles.row}>
                <Image source={{ uri: 'https://gretchenrubin.com/wp-content/uploads/2025/05/2ddkmmnzjcu.jpg' }} style={styles.imageThird} />
                <Image source={{ uri: 'https://miro.medium.com/v2/resize:fit:1400/1*znckX_KHeU_kkHSiRrFgOg.jpeg' }} style={styles.imageThird} />
                <Image source={{ uri: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*iO5VTR-zkr-G1a82' }} style={styles.imageThird} />
              </View>
            </View>
        )}
      </View>

      <View style={styles.postFooter}>
        <View style={{flexDirection: 'row', gap: 4}}><LikeIcon width={20} height={20} fill={'#81818D'}/><Text style={styles.footerText}> {likes} Вподобань</Text></View>
        <View style={{flexDirection: 'row', gap: 4}}><EyeIcon width={20} height={20} fill={'#81818D'}/><Text style={styles.footerText}>{views} Переглядів</Text></View>
      </View>
    </View>
  );
}