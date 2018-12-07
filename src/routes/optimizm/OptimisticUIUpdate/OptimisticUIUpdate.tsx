import React, { useState } from 'react';

import {
  Container,
  SectionTitle,
  Card,
  Settings,
  SettingsInput,
  SettingsToggle,
} from '../../../components';

import Cache from '../../../containers/Cache';
import OptimisticRequest from '../../../containers/OptimisticRequest';

import avatar from '../../../img/avatar.svg';
import { createOptimisticResponse, createResponse } from './utils';

const initialState = {
  avatar,
  username: 'developer_35',
  fullName: 'Dünyanın En İyi Developerı',
  body: 'Programlamaya yeni başlayacak arkadaşlara tavsiyem önce İngilizce öğrenmeleridir 👍🏽',
  isLiked: false,
  likeCount: 13,
};

const OptimisticUIUpdate = () => {
  const [networkDelay, setNetworkDelay] = useState(600);
  const [succeed, setSucceed] = useState(true);
  const [enabled, setEnabled] = useState(false);
  const [likeCount, setLikeCount] = useState(initialState.likeCount + 1);

  return (
    <Container>
      <SectionTitle>Optimistik UI Update</SectionTitle>

      <Cache initialState={initialState}>
        {({ state, updateState }) => (
          <OptimisticRequest
            enabled={enabled}
            currentData={state}
            optimisticResponse={createOptimisticResponse(state)}
            response={createResponse(state, { likeCount, isLiked: !state.isLiked })}
            networkDelay={networkDelay}
            succeded={succeed}
            onResponse={response => {
              updateState(response);
            }}
          >
            {like => (
              <Card
                avatar={state.avatar}
                fullName={state.fullName}
                username={state.username}
                body={state.body}
                isLiked={state.isLiked}
                likeCount={state.likeCount}
                onLikeClick={() => {
                  like();

                  if (enabled) {
                    setLikeCount(createOptimisticResponse(state).likeCount);
                  }
                }}
              />
            )}
          </OptimisticRequest>
        )}
      </Cache>

      <Settings>
        <SettingsInput
          label="Network Cevap Süresi"
          value={networkDelay}
          onChange={setNetworkDelay}
        />
        <SettingsToggle label="Optimistik Cevap Açık mı?" value={enabled} onChange={setEnabled} />
        <SettingsToggle label="Request Başarılı mı?" value={succeed} onChange={setSucceed} />
        <SettingsInput label="Sonraki Beğeni Sayısı" value={likeCount} onChange={setLikeCount} />
      </Settings>
    </Container>
  );
};

export default OptimisticUIUpdate;
