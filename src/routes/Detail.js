import React from 'react';

// class Detail extends React.Component {
//   componentDidMount() {
//     const { location, history } = this.props;
//     if (location.state === undefined) {
//       history.push('/');
//     }
//   }

//   render() {
//     const { location } = this.props;
//     if (location.state) {
//       return <span>{location.state.title}</span>;
//     } else {
//       return null;
//     }

//   }
// }

function Detail(props) {
  console.log(props);
  return <span></span>;
}

export default Detail;