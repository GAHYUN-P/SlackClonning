// import ChannelList from '@components/ChannelList';
// import CreateChannelModal from '@components/CreateChannelModal';
// import DMList from '@components/DMList';
// import InviteWorkspaceModal from '@components/InviteWorkspaceModal';
// import Menu from '@components/Menu';
// import Modal from '@components/Modal';
// import useInput from '@hooks/useInput';
// import useSocket from '@hooks/useSocket';
// import Channel from '@pages/Channel';
// import DirectMessage from '@pages/DirectMessage';
// import { Button, Input, Label } from '@pages/SignUp/styles';
// import { IChannel, IUser } from '@typings/db';

// import { useParams } from 'react-router';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import fetcher from '@utils/fetcher';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
// import useSWR from 'swr';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import gravatar from 'gravatar';

import {
  AddButton,
  Channels,
  Chats,
  Header,
  LogOutButton,
  MenuScroll,
  ProfileImg,
  ProfileModal,
  RightMenu,
  WorkspaceButton,
  WorkspaceModal,
  WorkspaceName,
  Workspaces,
  WorkspaceWrapper,
} from './WSstyles';

const Workspace = () => {
  // const params = useParams();
  // // console.log('params', params, 'location', location, 'routeMatch', routeMatch, 'history', history);
  // const { workspace } = params;
  // const [socket, disconnectSocket] = useSocket(workspace);
  // const { data: userData, mutate: revalidateUser } = useSWR<IUser | false>('/api/users', fetcher);
  // const { data: channelData } = useSWR(userData ? `/api/workspaces/${workspace}/channels` : null, fetcher);
  const [showCreateWorkspaceModal, setShowCreateWorkspaceModal] = useState(false);
  const [showInviteWorkspaceModal, setShowInviteWorkspaceModal] = useState(false);
  const [showCreateChannelModal, setShowCreateChannelModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showWorkspaceModal, setShowWorkspaceModal] = useState(false);
  // const [newWorkspace, onChangeNewWorkspace, setNewWorkspace] = useInput('');
  // const [newUrl, onChangeNewUrl, setNewUrl] = useInput('');

  // const onLogOut = useCallback(() => {
  //   axios
  //     .post('/api/users/logout')
  //     .then(() => {
  //       revalidateUser();
  //     })
  //     .catch((error) => {
  //       console.dir(error);
  //       toast.error(error.response?.data, { position: 'bottom-center' });
  //     });
  // }, []);

  // const onCreateWorkspace = useCallback(
  //   (e) => {
  //     e.preventDefault();
  //     if (!newWorkspace || !newWorkspace.trim()) {
  //       return;
  //     }
  //     if (!newUrl || !newUrl.trim()) {
  //       return;
  //     }
  //     axios
  //       .post('/api/workspaces', {
  //         workspace: newWorkspace,
  //         url: newUrl,
  //       })
  //       .then(() => {
  //         revalidateUser();
  //         setShowCreateWorkspaceModal(false);
  //         setNewWorkspace('');
  //         setNewUrl('');
  //       })
  //       .catch((error) => {
  //         console.dir(error);
  //         toast.error(error.response?.data, { position: 'bottom-center' });
  //       });
  //   },
  //   [newWorkspace, newUrl],
  // );

  const onClickCreateWorkspace = useCallback(() => {
    setShowCreateWorkspaceModal(true);
  }, []);

  const onClickAddChannel = useCallback(() => {
    setShowCreateChannelModal(true);
  }, []);

  const onClickInviteWorkspace = useCallback(() => {
    setShowInviteWorkspaceModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setShowCreateWorkspaceModal(false);
    setShowCreateChannelModal(false);
    setShowInviteWorkspaceModal(false);
  }, []);

  const onClickUserProfile = useCallback(() => {
    setShowUserMenu((prev) => !prev);
  }, []);

  const toggleWorkspaceModal = useCallback(() => {
    setShowWorkspaceModal((prev) => !prev);
  }, []);

  // useEffect(() => {
  //   return () => {
  //     console.info('disconnect socket', workspace);
  //     disconnectSocket();
  //   };
  // }, [disconnectSocket, workspace]);
  // useEffect(() => {
  //   if (channelData && userData) {
  //     console.info('로그인하자', socket);
  //     socket?.emit('login', { id: userData?.id, channels: channelData.map((v) => v.id) });
  //   }
  // }, [socket, userData, channelData]);

  // if (userData === false) {
  //   return <Redirect to="/login" />;
  // }

  return (
    <div>
      <Header> 헤더
          <RightMenu>
            <span onClick={onClickUserProfile}>
              <ProfileImg/>
            </span>
                <ProfileModal>
                 프로필 모달
                </ProfileModal>
                <LogOutButton>로그아웃</LogOutButton>
          </RightMenu>
      </Header>

      <WorkspaceWrapper>
        <Workspaces>
          
          <WorkspaceButton>워크스페이스버튼</WorkspaceButton>
          <AddButton onClick={onClickCreateWorkspace}>+</AddButton>
        </Workspaces>
        <Channels>
          <WorkspaceName onClick={toggleWorkspaceModal}>
            워크스페이스 이름
          </WorkspaceName>
          <MenuScroll>
              <WorkspaceModal>
                <h2>유저네임</h2>
                <button onClick={onClickInviteWorkspace}>워크스페이스에 사용자 초대</button>
                <button onClick={onClickAddChannel}>채널 만들기</button>
                <button>로그아웃</button>
              </WorkspaceModal>
          </MenuScroll>
        </Channels>
        <Chats>
          <Switch>
            {/* <Route path="/workspace/:workspace/channel/:channel" component={Channel} />
            <Route path="/workspace/:workspace/dm/:id" component={DirectMessage} /> */}
          </Switch>
        </Chats>
      </WorkspaceWrapper>
    </div>
  );
};

export default Workspace;