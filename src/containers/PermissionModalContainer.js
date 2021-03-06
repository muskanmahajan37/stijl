// Copyright 2016 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as ReactRedux from 'react-redux';

import * as actions from '../actions';
import PermissionModal from '../components/PermissionModal';
import * as permissions from '../permissions';

const mapStateToProps = ({ modal, config }) => ({
  show: (modal === 'permission'),
  sites: config.sites,
});

const mapDispatchToProps = (dispatch) => ({
  async onContinue(sites) {
    await permissions.request(sites);
    dispatch(actions.closeModal());
    dispatch(actions.refreshAll());
  },
});

const PermissionModalContainer = ReactRedux.connect(
  mapStateToProps, mapDispatchToProps)(PermissionModal);

export default PermissionModalContainer;
