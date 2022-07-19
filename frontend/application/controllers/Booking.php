<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Booking extends CI_Controller {

	function __construct()
	{
		parent::__construct();
		if ($this->session->userdata('id_user')){}else{redirect(base_url('login'));};
		$this->load->model('Booking_model');
        $this->load->model('Ruangan_model');
        $this->load->model('Auth_model');
	}

	public function index()
	{   
        
        //$data = $this->Auth_model->get();
        //$data['ruangan'] = $this->Ruangan_model->getAll();
		$data = $this->Booking_model->getBookingJoin();
		$this->load->view('booking_view', $data);
	}

	public function login()
	{
		$this->load->view('login_view');
	}

    public function tambahBooking()
	{
        $data = $this->Ruangan_model->getAll();
        $this->load->view('tambah_booking_view',$data);
	}

	public function tambahBookingAction()
	{
		$this->Booking_model->insertBooking();
        redirect('Booking');
	}

    public function editBooking($id_booking)
	{	

		$data = $this->Booking_model->getBookingById($id_booking);
		$data['ruangan'] = $this->Ruangan_model->getAll();
        $this->load->view('edit_booking_view',$data);
	}

	public function editRuanganAction()
	{
		$kode_ruangan = $this->input->post('kode_ruangan');
		$this->Booking_model->updateRecord($kode_ruangan);
        redirect('Ruangan');
	}

    public function hapusRuangan($kode_ruangan)
	{
		$this->Booking_model->deleteRecord($kode_ruangan);
        redirect('Ruangan');
	}
}