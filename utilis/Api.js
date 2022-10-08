//сделана псевдо-авторизация

import axios from "axios";
import { Alert } from "react-native";

export default class Api {
  constructor() {
    this._email = "Sincere@april.biz";
    this._baseUrl = "https://jsonplaceholder.typicode.com";
    this._profileData = { email: "1234", password: "1234" };
  }

  _handleError(error) {
    Alert.alert(`Ошибка ${error}`, "Пожалуйста, перезагрузите приложение.");
  }

  _getAlbums = (userData) => {
    if (userData != null) {
      return axios
        .get("https://jsonplaceholder.typicode.com/albums")
        .then(({ data }) => {
          const needAlbums = [];
          data
            .sort((album) => album.albumId)
            .forEach((album) => {
              if (needAlbums.findIndex((x) => x.userId == album.userId) == -1) {
                needAlbums.push(album);
                const user = userData.find((x) => x.id == album.userId);
                if (user != null) {
                  user.firstAlbum = album;
                }
              }
            });
          return needAlbums;
        });
    }
    return null;
  };

  _getPhotos = (albums) => {
    if (albums != null) {
      axios
        .get(`https://jsonplaceholder.typicode.com/photos`)
        .then(({ data }) => {
          const albumFirstPhoto = [];
          data
            .sort((x) => x.photoId)
            .forEach((photo) => {
              if (
                albumFirstPhoto.findIndex((x) => x.albumId == photo.albumId) ==
                -1
              ) {
                albumFirstPhoto.push(photo);
                const album = albums.find((x) => x.id == photo.albumId);
                if (album != null) {
                  album.firstPhoto = photo;
                }
              }
            });
          return albumFirstPhoto;
        });
    }
  };

  _getPost = (userData) => {
    if (userData != null) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts`)
        .then(({ data }) => {
          const userFirstPost = [];
          data
            .sort((x) => x.postId)
            .forEach((post) => {
              if (
                userFirstPost.findIndex((x) => x.userId == post.userId) == -1
              ) {
                userFirstPost.push(post);
                const user = userData.find((x) => x.id == post.userId);
                if (user != null) {
                  user.firstPost = post;
                }
              }
            });
          return userFirstPost;
        });
    }
  };

  authorization(email, password) {
    const incomingData = { email: email, password: password };
    return new Promise((resolve, reject) => {
      if (
        this._profileData.email === incomingData.email &&
        this._profileData.password === incomingData.password
      ) {
        const userId = { userId: 1 };
        resolve(userId);
      } else {
        reject("Ошибка авторизации");
      }
    });
  }

  getUsersInformation = (setter) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setter(res.data);
        return res.data;
      })
      .then((userData) => {
        this._getPost(userData);
        this._getAlbums(userData)?.then((albums) => {
          this._getPhotos(albums);
        });
      })
      .catch((error) => {
        this._handleError(error);
      });
  };
}
