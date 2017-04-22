import React, { Component, PropTypes } from 'react';
import controller from '../../lib/controller';
import i18n from '../../lib/i18n';
import styles from './index.styl';

class QuickAccessToolbar extends Component {
    static propTypes = {
        state: PropTypes.object,
        actions: PropTypes.object
    };

    command = {
        'cyclestart': () => {
            controller.command('cyclestart');
        },
        'feedhold': () => {
            controller.command('feedhold');
        },
        'homing': () => {
            controller.command('homing');
        },
        'sleep': () => {
            controller.command('sleep');
        },
        'unlock': () => {
            controller.command('unlock');
        },
        'reset': () => {
            controller.command('reset');
        }
    };

    render() {
        return (
            <div className={styles.quickAccessToolbar}>
                <ul className="nav navbar-nav">
                    <li className="btn-group btn-group-sm" role="group">
                        <button
                            type="button"
                            className="btn btn-default"
                            onClick={this.command.cyclestart}
                            title={i18n._('Cycle Start')}
                        >
                            <i className="fa fa-repeat" />
                            <span className="space" />
                            {i18n._('Cycle Start')}
                        </button>
                        <button
                            type="button"
                            className="btn btn-default"
                            onClick={this.command.feedhold}
                            title={i18n._('Feedhold')}
                        >
                            <i className="fa fa-hand-paper-o" />
                            <span className="space" />
                            {i18n._('Feedhold')}
                        </button>
                    </li>
                    <li className="btn-group btn-group-sm" role="group">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.command.homing}
                            title={i18n._('Homing')}
                        >
                            <i className="fa fa-home" />
                            <span className="space" />
                            {i18n._('Homing')}
                        </button>
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={this.command.sleep}
                            title={i18n._('Sleep')}
                        >
                            <i className="fa fa-bed" />
                            <span className="space" />
                            {i18n._('Sleep')}
                        </button>
                        <button
                            type="button"
                            className="btn btn-warning"
                            onClick={this.command.unlock}
                            title={i18n._('Unlock')}
                        >
                            <i className="fa fa-unlock-alt" />
                            <span className="space" />
                            {i18n._('Unlock')}
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={this.command.reset}
                            title={i18n._('Reset')}
                        >
                            <i className="fa fa-undo" />
                            <span className="space" />
                            {i18n._('Reset')}
                        </button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default QuickAccessToolbar;
