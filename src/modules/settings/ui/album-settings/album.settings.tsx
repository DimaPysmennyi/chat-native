import React, { useState } from 'react';
import {View,Text,TextInput,Button,Modal,ScrollView,SafeAreaView,} from 'react-native';
import { Album } from './album.settings.types';
//я хз как по другому айди сделать 
// сделал что успел насчет работоспособности не уверен 

let nextAlbumId = 1;

export default function AlbumScreen() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [theme, setTheme] = useState('');
  const [year, setYear] = useState('');

  function createAlbum() {
    const newAlbum: Album = {
        id: nextAlbumId++,
        name: name,
        theme: theme,
        year: year,
    };

    fetch('http...', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newAlbum),
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Помилка при створенні альбому')
        }
        return response.json();
    })
    .then((data) => {
        setAlbums([...albums, data]);
        setName('');
        setTheme('');
        setYear('');
        setModalVisible(false);
    })
    .catch((error) => {
        console.error(error);
    });
}

function deleteAlbum(id: number) {
    setAlbums(albums.filter((album) => album.id !== id));
}

return (
    <SafeAreaView>
        <Button title="Створити альбом" onPress={() => setModalVisible(true)} />
    <ScrollView>
        {albums.map((album) => (
            <View key={album.id}>
            <Text>
                {album.name} ({album.year})
            </Text>
            <Text>{album.theme}</Text>
            <Button title="Видалити альбом" color="red" onPress={() => deleteAlbum(album.id)} />
        </View>
        ))}
    </ScrollView>
{/* модалка не модалка */}
    <Modal visible={modalVisible}>
        <View>
            <Text>Створити альбом</Text>
            <TextInput
                placeholder="Назва"
                value={name}
                onChangeText={setName}
          />
            <TextInput
                placeholder="Тема"
                value={theme}
                onChangeText={setTheme}
            />
            <TextInput
                  placeholder="Рік"
                  value={year}
                  keyboardType="numeric"
                  onChangeText={setYear}
            />
        <View>
            <Button title="Скасувати" onPress={() => setModalVisible(false)} />
            <Button title="Зберегти" onPress={createAlbum} />
        </View>
        </View>
    </Modal>
    </SafeAreaView>
);
}