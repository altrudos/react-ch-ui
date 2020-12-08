import {Donation} from "model/donation";
import {getDriveTitle} from "api/drives";
import {Drive} from "model/drive";
import './share-donation.less'
import {MoneyToString} from "../../components/money";

export function ShareDonation(donation : Donation, drive: Drive) {
	let msg = `I donated ${MoneyToString(donation.DonorAmount, donation.DonorCurrency)} to ${donation.CharityName} for ${getDriveTitle(drive)} ${window.location}`

	function copy (e) {
		e.preventDefault()
/*

 */

		const msg = document.querySelector('.copied-message')
		msg.classList.toggle('show', true)
		setTimeout(() => {
			msg.classList.toggle('show', false)
		}, 2000)

		const ta = document.querySelector<HTMLTextAreaElement>("textarea.share-msg");
		ta.select();
		ta.setSelectionRange(0, 99999);

		document.execCommand("copy");
		return
	}

	return <div className={"share-donation"}>
		<div className={"prompt"}>Share Your Donation</div>
		<textarea defaultValue={msg} className={"share-msg input"}></textarea>
		<div>
			<button onClick={copy} className={"button is-primary"}>Copy to Clipboard</button>
			<span className={"copied-message"}>Copied!</span>
		</div>
	</div>
}
