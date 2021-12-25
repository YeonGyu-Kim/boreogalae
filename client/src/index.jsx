import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import Contents from "./contentsApi/contentsApi";
import ContentsMovie from "./contentsApi/movieApi";
import ContentsTV from "./contentsApi/tvApi";
import TokenStorage from "./db/token";
import Socket from "./network/socket";
import CommentService from "./service/comments";
import ChatService from "./service/chat";
import { QueryClient, QueryClientProvider } from "react-query";

const contents = new Contents(process.env.REACT_APP_TMDB_API_KEY);
const contentsMovie = new ContentsMovie();
const contentsTV = new ContentsTV();
const tokenStorage = new TokenStorage();
const socketClient = new Socket("https://boreogalae.herokuapp.com", () =>
  tokenStorage.getToken()
);
const commentService = new CommentService(socketClient);
const chatService = new ChatService(socketClient);

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App
          contents={contents}
          contentsMovie={contentsMovie}
          contentsTV={contentsTV}
          commentService={commentService}
          chatService={chatService}
        />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
