import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Int "mo:core/Int";
import Time "mo:core/Time";
import Array "mo:core/Array";
import Iter "mo:core/Iter";

actor {
  type Inquiry = {
    id : Nat;
    fullName : Text;
    email : Text;
    phoneNumber : Text;
    destinationCountry : Text;
    visaType : Text;
    message : Text;
    timestamp : Int;
  };

  let inquiries = Map.empty<Nat, Inquiry>();
  var nextInquiryId = 1;

  public shared ({ caller }) func submitInquiry(fullName : Text, email : Text, phoneNumber : Text, destinationCountry : Text, visaType : Text, message : Text) : async Nat {
    let inquiry : Inquiry = {
      id = nextInquiryId;
      fullName;
      email;
      phoneNumber;
      destinationCountry;
      visaType;
      message;
      timestamp = Time.now();
    };

    inquiries.add(nextInquiryId, inquiry);
    nextInquiryId += 1;
    inquiry.id;
  };

  public query ({ caller }) func getInquiry(id : Nat) : async ?Inquiry {
    inquiries.get(id);
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.values().toArray();
  };
};
