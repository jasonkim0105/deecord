import { connect } from 'react-redux';
import { fetchServers, createServer } from '../../actions/server_actions';
import ServerIndex from './server_index';
import { openModal } from '../../actions/modal_actions'

const mapStateToProps = state => ({
  servers: Object.values(state.entities.servers)
})

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModal('addServer')),
  fetchServers: () => dispatch(fetchServers()),
  createServer: (server) => dispatch(createServer(server))
})

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex);